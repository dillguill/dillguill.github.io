import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/app.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio website showcasing projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="glass"></div>
      <div className="grain"></div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
