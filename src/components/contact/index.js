import Image from 'next/image'

import Link from '../../components/utils/link'
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





        </div>
      </main>

      <footer className='stripDark'>
        <div className={styles.tierFooter}>
        </div>
        <Link href='#'>
          VOLTAR
        </Link>
      </footer>
    </>
  )
}
