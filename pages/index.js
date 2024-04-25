import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

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
            <li>
              <Link href="#home">Cilj</Link>
            </li>
            <li>
              <Link href="#about">Program</Link>
            </li>
            <li>
              <Link href="#category">Olimpijada</Link>
            </li>
            <li>
              <Link href="#Lokacija">Lokacija</Link>
            </li>
          </ul>
          {/* <h1 className={styles.logo}>Navbar</h1> */}
        </div>
      </nav>

      <main className={styles.main}>
        <section id="home" className={styles.content}>
          <div className={styles.homeSection}>
            <img
              className={styles.image}
              src="/fest1.png"
              alt="Home"
              style={{ width: '100%' }}
            />
            <div className={styles.homeSectionFooter}>
              <img
                className={styles.logoImage}
                src="/festival-logo.png"
                alt="Home"
              />
              <span className={styles.homeDescription}>
                I ove godine zajedno pozdravljamo proljeće u centru Zagreba!
              </span>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <div id="about" className={styles.program}>
            <div style={{ paddingTop: '66px' }}>
              <strong>Od 29.4. do 05.05. 2024.</strong> livada kod kluba Route
              66
              <br /> postaje dom Welcome Spring Festivala.
            </div>
            <div>
              Welcome Spring nastao je spajanjem ljubavi prema prirodi, hrani,
              piću i<br /> zabavi. Dok uživamo u proljeću, družimo se i
              upoznajemo, educiramo se o <br />
              očuvanju okoliša, fino jedemo, plešemo i pjevamo.
            </div>
            <div>
              <strong>
                Welcome Spring Festival je mjesto na kojem se priroda i ljudi
                vole
              </strong>
            </div>
            <div className={styles.gandhi}>
              <strong>BUDI PROMJENA</strong> <br />
              <i>
                "Budi promjena koju želiš vidjeti u svijetu" - Mahatma Gandhi
              </i>
            </div>
            <div className={styles.contentGreen}>
              Welcome Spring Festival kao festival pozitivnih promjena, kroz
              interaktivan i<br /> zabavan sadržaj, radionice, predavanja igru,
              zabavu, umjetnost i glazbu potiće
              <br /> društveno odgovorno ponašanje u zajednici i promjene u
              drustvu.
            </div>
            <div
              className={styles.contentGreen}
              style={{ paddingBottom: '66px' }}
            >
              <strong>“AFTER FUN STILL GREEN”</strong>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <div class={styles.contentWraper}>
            <div id="category" className={styles.contentTitle}>
              PROGRAM FESTIVALA
            </div>
            <div className={styles.contentImages}>
              <img src="/koncerti.jpg" alt="Category" />
              <img src="/predstave.jpg" alt="Category" />
              <img src="/mala-olimpijada-otpada.jpg" alt="Category" />
              <img src="/predavanje-i-polemike.jpg" alt="Category" />
            </div>
            <div className={styles.contentImages}>
              <img src="/izlozbe.jpg" alt="Category" />
              <img src="/delicije.jpg" alt="Category" />
              <img src="/edukativne-radionice.jpg" alt="Category" />
              <img src="/plesnjaci.jpg" alt="Category" />{' '}
            </div>
          </div>
        </section>
        <section id="Lokacija" className={styles.content}>
          <div>
            <div className={styles.location}>
              <div className={styles.socials}>
                <span>
                  PRATITE NAS NA
                  <br /> DRUŠTVENIM MREŽAMA
                </span>
                <ul className={styles.social}>
                  <li className={styles.animated}>
                    <a
                      className={styles.link}
                      href="https://web.facebook.com/WelcomeSpringFestivalZg/"
                      target="_new"
                    >
                      <svg height="1em" viewBox="0 0 320 512">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.animated}>
                    <a
                      className={styles.link}
                      href="https://www.instagram.com/welcome_spring_festival/"
                      target="_new"
                    >
                      <svg height="1em" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className={styles.contact}>
                  <span>KONTAKT</span>
                  <a
                    className={styles.mail}
                    href="mailto:prirodazasve@gmail.com"
                  >
                    prirodazasve@gmail.com
                  </a>
                </div>
              </div>
              <div className={styles.locationWrapper}>
                <span className={styles.locationTitle}>LOKACIJA</span>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d577.668071483285!2d15.977497599722124!3d45.799015800227714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d65f149a913d%3A0xd1821dba68f18cba!2sRoute%2066%20Zagreb!5e0!3m2!1sen!2shr!4v1714025834166!5m2!1sen!2shr"
                  width="400"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className={styles.locationFooter}>#priroda-za-sve-2024</div>
          </div>
        </section>
      </main>

      <footer>Powered by Bota and Željac</footer>

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
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
