import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Contact() {
  return (
    <>
      <header className="stripDark">
        <div className={styles.tierHeader}>
          <Image
            src="/rodneyrinaldi.svg"
            alt="foto rodney rinaldi"
            layout="intrinsic"
            width={1800}
            height={703}
          />
        </div>
      </header>

      <main className='stripLight'>
        <div className={styles.tierMain}>

          <h3>Contato</h3>
          <p>xxxx</p>

        </div>
      </main>

      <footer className='stripLight'>
        <Link href="/">
          <a className={styles.goBack}>
            <Image
              src="/back.svg"
              alt="voltar"
              layout="intrinsic"
              width={14}
              height={14}
            />
            <spam>VOLTAR</spam>
          </a>
        </Link>
      </footer>
    </>
  )
}
