// src/components/BlobBackground.js
import { useEffect, useRef } from 'react';

export default function BlobBackground() {
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById('blob-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let lava;

    // ── Helpers ────────────────────────────────────────────────────────────────

    const isMobile = () => window.innerWidth < 768;

    const isDarkMode = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const COLORS = {
      light: ['#FFB600', '#FF9800', '#FF4000', '#FF1300'],
      dark:  ['#C900FF', '#0080FF', '#0030FF', '#2101FF'],
    };

    function makeGradient(w, h) {
      const cols = isDarkMode() ? COLORS.dark : COLORS.light;
      const g = ctx.createRadialGradient(w, h, 0, w, h, w);
      g.addColorStop(0,    cols[0]);
      g.addColorStop(0.25, cols[1]);
      g.addColorStop(0.75, cols[2]);
      g.addColorStop(1,    cols[3]);
      return g;
    }

    // ── Point ──────────────────────────────────────────────────────────────────

    function Point(x, y) {
      this.x = x;
      this.y = y;
      this.magnitude = x * x + y * y;
      this.computed = 0;
      this.force = 0;
    }
    Point.prototype.add = function (p) {
      return new Point(this.x + p.x, this.y + p.y);
    };

    // ── Ball ───────────────────────────────────────────────────────────────────

    function Ball(w, h) {
      const wh = Math.min(w, h);
      const divisor = isMobile() ? 12 : 10;
      this.width  = w;
      this.height = h;
      this.size   = wh / divisor + Math.random() * 1.4 * (wh / divisor);
      this.pos = new Point(
        w * 0.2 + Math.random() * w * 0.6,
        h * 0.2 + Math.random() * h * 0.6,
      );
      this.vel = new Point(
        (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25),
        (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.5),
      );
    }
    Ball.prototype.move = function () {
      if (this.pos.x >= this.width - this.size) {
        if (this.vel.x > 0) this.vel.x = -this.vel.x;
        this.pos.x = this.width - this.size;
      } else if (this.pos.x <= this.size) {
        if (this.vel.x < 0) this.vel.x = -this.vel.x;
        this.pos.x = this.size;
      }
      if (this.pos.y >= this.height - this.size) {
        if (this.vel.y > 0) this.vel.y = -this.vel.y;
        this.pos.y = this.height - this.size;
      } else if (this.pos.y <= this.size) {
        if (this.vel.y < 0) this.vel.y = -this.vel.y;
        this.pos.y = this.size;
      }
      this.pos = this.pos.add(this.vel);
    };

    // ── LavaLamp ───────────────────────────────────────────────────────────────

    function LavaLamp(w, h) {
      this.step   = isMobile() ? 5 : 3;
      this.width  = w;
      this.height = h;
      this.sx     = Math.floor(w / this.step);
      this.sy     = Math.floor(h / this.step);
      this.iter   = 0;
      this.sign   = 1;
      this.paint  = false;
      this.fill   = makeGradient(w, h);

      // Marching-squares lookup tables
      this.plx     = [0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0];
      this.ply     = [0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1];
      this.mscases = [0,3,0,3,1,3,0,3,2,2,0,2,1,1,0];
      this.ix      = [1,0,-1,0,0,1,0,-1,-1,0,1,0,0,1,1,0,0,0,1,1];

      // Grid
      this.grid = [];
      for (let i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
        this.grid[i] = new Point(
          (i % (this.sx + 2)) * this.step,
          Math.floor(i / (this.sx + 2)) * this.step,
        );
      }

      // Balls
      const count = isMobile() ? 4 : 6;
      this.balls = Array.from({ length: count }, () => new Ball(w, h));
    }

    LavaLamp.prototype.computeForce = function (x, y, id) {
      if (id === undefined) id = x + y * (this.sx + 2);
      let force;
      if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
        force = 0.6 * this.sign;
      } else {
        force = 0;
        const cell = this.grid[id];
        for (const ball of this.balls) {
          force +=
            (ball.size * ball.size) /
            (-2 * cell.x * ball.pos.x -
              2 * cell.y * ball.pos.y +
              ball.pos.magnitude +
              cell.magnitude);
        }
        force *= this.sign;
      }
      this.grid[id].force = force;
      return force;
    };

    LavaLamp.prototype.marchingSquares = function (next) {
      const x    = next[0];
      const y    = next[1];
      const pdir = next[2];
      const id   = x + y * (this.sx + 2);

      if (this.grid[id].computed === this.iter) return false;

      let mscase = 0;
      for (let i = 0; i < 4; i++) {
        const idn =
          x + this.ix[i + 12] + (y + this.ix[i + 16]) * (this.sx + 2);
        let force = this.grid[idn].force;
        if (
          (force > 0 && this.sign < 0) ||
          (force < 0 && this.sign > 0) ||
          !force
        ) {
          force = this.computeForce(
            x + this.ix[i + 12],
            y + this.ix[i + 16],
            idn,
          );
        }
        if (Math.abs(force) > 1) mscase += Math.pow(2, i);
      }

      if (mscase === 15) return [x, y - 1, false];

      let dir;
      if      (mscase === 5)  dir = pdir === 2 ? 3 : 1;
      else if (mscase === 10) dir = pdir === 3 ? 0 : 2;
      else {
        dir = this.mscases[mscase];
        this.grid[id].computed = this.iter;
      }

      const f1 = Math.abs(
        Math.abs(this.grid[x + this.plx[4*dir+2] + (y + this.ply[4*dir+2]) * (this.sx+2)].force) - 1
      );
      const f2 = Math.abs(
        Math.abs(this.grid[x + this.plx[4*dir+3] + (y + this.ply[4*dir+3]) * (this.sx+2)].force) - 1
      );
      const interp = this.step / (f1 / f2 + 1);

      ctx.lineTo(
        this.grid[x + this.plx[4*dir]   + (y + this.ply[4*dir])   * (this.sx+2)].x + this.ix[dir]   * interp,
        this.grid[x + this.plx[4*dir+1] + (y + this.ply[4*dir+1]) * (this.sx+2)].y + this.ix[dir+4] * interp,
      );
      this.paint = true;
      return [x + this.ix[dir+4], y + this.ix[dir+8], dir];
    };

    LavaLamp.prototype.render = function () {
      for (const ball of this.balls) ball.move();
      this.iter++;
      this.sign  = -this.sign;
      this.paint = false;
      ctx.fillStyle = this.fill;
      ctx.beginPath();
      for (const ball of this.balls) {
        let next = [
          Math.round(ball.pos.x / this.step),
          Math.round(ball.pos.y / this.step),
          false,
        ];
        do { next = this.marchingSquares(next); } while (next);
        if (this.paint) {
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          this.paint = false;
        }
      }
    };

    // ── Init & loop ────────────────────────────────────────────────────────────

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      lava = new LavaLamp(canvas.width, canvas.height);
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lava.render();
      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    loop();

    window.addEventListener('resize', resize);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onTheme = () => { lava = new LavaLamp(canvas.width, canvas.height); };
    mq.addEventListener('change', onTheme);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      mq.removeEventListener('change', onTheme);
    };
  }, []);

  return (
    <canvas
      id="blob-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
