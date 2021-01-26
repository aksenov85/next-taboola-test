import Head from 'next/head'
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

const addTaboolaHead = () => {
  const script = document.createElement('script');
  script.innerHTML = `
    window._taboola = window._taboola || [];
    _taboola.push({article:'auto'});
    !function (e, f, u, i) {
      if (!document.getElementById(i)){
        e.async = 1;
        e.src = u;
        e.id = i;
        f.parentNode.insertBefore(e, f);
      }
    }(document.createElement('script'),
    document.getElementsByTagName('script')[0],
    '//cdn.taboola.com/libtrc/uscartrader/loader.js',
    'tb_loader_script');
    if(window.performance && typeof window.performance.mark == 'function')
      {window.performance.mark('tbl_ic');}
  `;
  document.head.append(script);
};

const addTaboolaThumbnails = () => {
  const script = document.createElement('script');
  script.innerHTML = `
    window._taboola = window._taboola || [];
    _taboola.push({
      mode: 'alternating-thumbnails-a',
      container: 'taboola-below-article-thumbnails',
      placement: 'Below Article Thumbnails',
      target_type: 'mix'
    });
  `;
  const div = document.querySelector('#taboola-below-article-thumbnails');
  div.after(script);
};

const addTaboolaFooter = () => {
  const script = document.createElement('script');
  script.innerHTML = `
    window._taboola = window._taboola || [];
    _taboola.push({flush: true});
  `;
  const footer = document.querySelector('footer');
  footer.after(script);
};

export default function Article() {
  useEffect(() => {
    addTaboolaHead();
    addTaboolaThumbnails();
    addTaboolaFooter();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p><Link href="/">Go to home</Link></p>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div id="taboola-below-article-thumbnails"></div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
