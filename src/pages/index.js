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
        <div className={styles.tierMain}>
          <Image
            src="/rodneyrinaldi.svg"
            alt="rodney rinaldi"
            layout="intrinsic"
            width={780}
            height={135}
          />
          <nav>
            <ul>
              <li>adv</li>
              {' | '}
              <li>dev</li>
              {' | '}
              <li>dpo</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.stripLight}>

      </div>

      <div className={styles.stripDark}>

      </div>


    </>
  )
}
