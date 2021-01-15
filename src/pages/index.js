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

      <nav>

      </nav>

      <footer>

      </footer>

    </>
  )
}
