import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Logo() {
  return (
    <>
      <div className='stripDark'>
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
          <Link href="/contact">
            <a className={styles.linkEmail}>
              <Image
                src="/email.svg"
                alt="rodney rinaldi"
                layout="intrinsic"
                width={40}
                height={40}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
