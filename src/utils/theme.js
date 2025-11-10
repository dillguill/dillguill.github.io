export const THEME_KEY = 'theme';
export const THEMES = { LIGHT: 'light', DARK: 'dark' };

export const getStoredTheme = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(THEME_KEY);
};

export const setStoredTheme = (theme) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_KEY, theme);
};

export const getSystemTheme = () => {
  if (typeof window === 'undefined') return THEMES.LIGHT;
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? THEMES.DARK 
    : THEMES.LIGHT;
};

export const getInitialTheme = () => {
  return getStoredTheme() || getSystemTheme();
};

export const applyTheme = (theme) => {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  const isDark = theme === THEMES.DARK;
  
  // Apply theme class and color scheme
  root.classList.toggle('dark', isDark);
  root.style.colorScheme = theme;
  
  // Update meta tags for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.content = isDark ? '#0a0a0a' : '#EAE0D2';
  }
  
  const appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  if (appleStatusBar) {
    appleStatusBar.content = isDark ? 'black-translucent' : 'default';
  }
  
  // Persist theme preference
  setStoredTheme(theme);
};