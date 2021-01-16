import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Footer() {
  return (
    <>
      <div className='stripDark'>
        <div className={styles.tierMain}>
          <Link href="https://linkedin.com/in/rodneyrinaldi">
            <a className={styles.linkMidias}>
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                layout="intrinsic"
                width={30}
                height={30}
              />
            </a>
          </Link>
          <Link href="https://github.com/rodneyrinaldi">
            <a className={styles.linkMidias}>
              <Image
                src="/github.svg"
                alt="Github"
                layout="intrinsic"
                width={30}
                height={30}
              />
            </a>
          </Link>
          <Link href="https://facebook.com/rodneyrinaldi">
            <a className={styles.linkMidias}>
              <Image
                src="/facebook.svg"
                alt="Facebook"
                layout="intrinsic"
                width={30}
                height={30}
              />
            </a>
          </Link>
          <Link href="https://twitter.com/rodneyrinaldi">
            <a className={styles.linkMidias}>
              <Image
                src="/twitter.svg"
                alt="Twitter"
                layout="intrinsic"
                width={30}
                height={30}
              />
            </a>
          </Link>
          <Link href="#">
            <a className={styles.linkMidias}>
              <Image
                src="/rr-body.png"
                alt="Rodney"
                layout="intrinsic"
                width={42}
                height={46}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}