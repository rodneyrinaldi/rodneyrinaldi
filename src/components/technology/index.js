import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Technology() {
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

          <h3>Tecnologia</h3>
          <p>xxxx</p>

          <Image
            src="/customer.svg"
            alt="foto rodney rinaldi"
            layout="intrinsic"
            width={1800}
            height={703}
          />

          <Link href='/'>
            <a href='#' className='buttonBase colorDark'>VOLTAR</a>
          </Link>


        </div>
      </main>
    </>
  )
}
