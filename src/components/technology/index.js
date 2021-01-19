import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Technology() {
  return (
    <>
      <div className='stripLight'>
        <div className={styles.tierMain}>

          <div>
            <Image
              src="/technology.png"
              alt="foto rodney rinaldi"
              layout="intrinsic"
              width={1800}
              height={703}
            />
            <h3>Tecnologia</h3>
            <p>xxxx</p>
          </div>

          <Link href="/">
            <a href="#" class={styles.myButton}>VOLTAR</a>
          </Link>


        </div>
      </div>
    </>
  )
}
