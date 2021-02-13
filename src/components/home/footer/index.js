import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Nav() {
  return (
    <div className='stripDark'>
      <div className={styles.tierMain}>
        <nav>
          <ul>
            <li>
              <Link href="http://linkedin.com/in/rodneyrinaldi">
                <a>
                  <Image
                    src="/github.svg"
                    alt="github rodney rinaldi"
                    layout="intrinsic"
                    width={28}
                    height={28}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="http://github.com/rodneyrinaldi">
                <a>
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin rodney rinaldi"
                    layout="intrinsic"
                    width={28}
                    height={28}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>
                  <Image
                    src="/profile.svg"
                    alt="rodney rinaldi dpo"
                    layout="intrinsic"
                    width={40}
                    height={50}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="http://facebook.com/rodneyrinaldi">
                <a>
                  <Image
                    src="/facebook.svg"
                    alt="facebook rodney rinaldi"
                    layout="intrinsic"
                    width={28}
                    height={28}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="http://twitter.com/rodneyrinaldi">
                <a>
                  <Image
                    src="/twitter.svg"
                    alt="profile rodney rinaldi"
                    layout="intrinsic"
                    width={26}
                    height={26}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/privacy">
          <a className={styles.privacyLink}>Política de privacidade e proteção de dados</a>
        </Link>
      </div>
    </div>
  )
}