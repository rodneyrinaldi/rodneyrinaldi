import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Header() {
  return (
    <div className='stripDark'>
      <div className={styles.tierMain}>
        <div className={styles.logo}>
          <Image
            src="/rodneyrinaldi.svg"
            alt="rodney rinaldi"
            layout="intrinsic"
            width={780}
            height={135}
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="http://adv.rodneyrinaldi.com">
                <a className={styles.navSites}>
                  adv
                  </a>
              </Link>
            </li>
            {' | '}
            <li>
              <Link href="http://dev.rodneyrinaldi.com">
                <a className={styles.navSites}>
                  dev
                  </a>
              </Link>
            </li>
            {' | '}
            <li>
              <Link href="http://dpo.rodneyrinaldi.com">
                <a className={styles.navSites}>
                  dpo
                  </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.email}>
          <Link href="/contact">
            <a className={styles.linkEmail}>
              <Image
                src="/email.svg"
                alt="rodney rinaldi"
                layout="intrinsic"
                width={36}
                height={36}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
