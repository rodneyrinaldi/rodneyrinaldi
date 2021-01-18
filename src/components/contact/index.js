import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Contact() {
  return (
    <>
      <div className='stripDark'>
        <div className={styles.tierMain}>
          <div className={styles.goBack}>
            <Link href="/">
              <a className={styles.buttonBack}>
                <Image
                  src="/back.svg"
                  alt="voltar"
                  layout="intrinsic"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
