import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Compliance() {
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

          <h3>Proteção de Dados</h3>
          <p>xxxx</p>

        </div>
      </main>

      <footer className='stripLight'>
        <Link href='/'>
          <a href='#' className='buttonBase colorDark'>VOLTAR</a>
        </Link>
      </footer>
    </>
  )
}
