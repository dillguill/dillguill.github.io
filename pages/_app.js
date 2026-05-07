import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/app.css';

const components = {
  // Add custom components here if needed
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={components}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Portfolio website showcasing projects and skills" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Global thermal background - renders on all pages */}
        <div className="thermal-bg"></div>
        <div className="glass"></div>
        <div className="grain"></div>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;