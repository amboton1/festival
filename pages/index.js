import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <nav className={styles.navbar}>
        <div className={`${styles['navbar-container']} ${styles.container}`}>
            <input type="checkbox" name="" id="" />
            <div className={styles['hamburger-lines']}>
                <span className={`${styles.line} ${styles.line1}`}></span>
                <span className={`${styles.line} ${styles.line2}`}></span>
                <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            <ul className={styles['menu-items']}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#category">Category</a></li>
                <li><a href="#menu">Menu</a></li>
            </ul>
            <h1 className={styles.logo}>Navbar</h1>
        </div>
      </nav>

      <main>
        <section id="home">
            <img className={styles.image} src="https://via.placeholder.com/500" alt="Home" />
        </section>
        <section id="about">
            <img className={styles.image} src="https://via.placeholder.com/600" alt="About" />
        </section>
        <section id="category">
            <img className={styles.image} src="https://via.placeholder.com/700" alt="Category" />
        </section>
        <section id="menu">
            <img className={styles.image} src="https://via.placeholder.com/800" alt="Menu" />
        </section>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
