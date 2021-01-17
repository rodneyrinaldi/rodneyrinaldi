import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Logo() {
  return (
    <div className='stripDark'>
      <div className={styles.tierMain}>
        <div>
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
                <a>
                  adv
                  </a>
              </Link>
            </li>
            {' | '}
            <li>
              <Link href="http://adv.rodneyrinaldi.com">
                <a>
                  dev
                  </a>
              </Link>
            </li>
            {' | '}
            <li>
              <Link href="http://adv.rodneyrinaldi.com">
                <a>
                  dpo
                  </a>
              </Link>
            </li>
          </ul>
        </nav>
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
  )
}
