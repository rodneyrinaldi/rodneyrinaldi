import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rodney Rinaldi Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.stripDark}>
        <main className={styles.mainLayer}>
          <div className={styles.rrLogo}>
            <Image
              src="/rodneyrinaldi.svg"
              alt="rodney rinaldi"
              layout="intrinsic"
              width={780}
              height={135}
            />
          </div>
          <nav>
            <ul>
              <li>adv</li>
              {' | '}
              <li>dev</li>
              {' | '}
              <li>dpo</li>
            </ul>
          </nav>
        </main>
      </div>

      <div className={styles.navLayer}>
        <nav>
          <ul>
            <li>
              <Image
                src="/adv.svg"
                alt="rodney rinaldi adv"
                layout="intrinsic"
                width={128}
                height={128}
              />
              <span>Direito, justiça e o</span>
              <span>exercício da cidadania</span>
            </li>
            <li>
              <Image
                src="/dev.svg"
                alt="rodney rinaldi dev"
                layout="intrinsic"
                width={128}
                height={128}
              />
              <span>Database, arquitetura e</span>
              <span>desenvolvimento de sistemas</span>
            </li>
            <li>
              <Image
                src="/dpo.svg"
                alt="rodney rinaldi dpo"
                layout="intrinsic"
                width={128}
                height={128}
              />
              <span>Conformidade, privacidade,</span>
              <span>segurança e proteção de dados</span>
            </li>
          </ul>

        </nav>
      </div>

      <footer>

      </footer>

    </>
  )
}
