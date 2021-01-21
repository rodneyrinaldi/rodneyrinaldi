import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Technology() {
  return (
    <>
      <header className="stripDark">
        <div className={styles.tierHeader}>
          <Link href="/">
            <a>
              <Image
                src="/rodneyrinaldi.svg"
                alt="foto rodney rinaldi"
                layout="intrinsic"
                width={1800}
                height={703}
              />
            </a>
          </Link>
        </div>
      </header>

      <main className='stripLight'>
        <div className={styles.tierMain}>

          <h3>Foco no Cliente</h3>
          <p></p>

          <div className={styles.tierArticles}>
            <div className={styles.divImg}>
              <Image
                src="/dev.svg"
                alt="customer centricity"
                layout="intrinsic"
                width={1800}
                height={703}
              />
              <spam>xxx</spam>
            </div>
            <div className={styles.divImg}>
              <Image
                src="/dev.svg"
                alt="customer centricity"
                layout="intrinsic"
                width={1800}
                height={703}
              />
              <spam>xxx</spam>
            </div>
          </div>

          <h3>Custo Benefício</h3>
          <p></p>

          <div className={styles.divImg}>
            <Image
              src="/technology.png"
              alt="customer centricity"
              layout="intrinsic"
              width={1800}
              height={703}
            />
          </div>

        </div>
      </main>

      <footer className='stripDark'>
        <div className={styles.tierFooter}>
          <nav>
            <ul>
              <li>
                <Link href="/advocacy">
                  <a>
                    <Image
                      src="/adv2.svg"
                      alt="rodney rinaldi adv"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
            Advocacia
          </li>
              <li>
                <Link href="/technology">
                  <a>
                    <Image
                      src="/dev2.svg"
                      alt="rodney rinaldi dev"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
            Tecnologia
          </li>
              <li>
                <Link href="/compliance">
                  <a>
                    <Image
                      src="/dpo2.svg"
                      alt="rodney rinaldi dpo"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
            Privacidade
          </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}
