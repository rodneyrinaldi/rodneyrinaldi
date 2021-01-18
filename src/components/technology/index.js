import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Technology() {
  return (
    <>
      <div className='stripLight'>
        <div className={styles.tierMain}>

          <div className={styles.goBack}>
            <Link href="/">
              <a className={styles.buttonBack}>
                <Image
                  src="/back2.svg"
                  alt="voltar"
                  layout="intrinsic"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </div>

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
        </div>
      </div>
    </>
  )
}
