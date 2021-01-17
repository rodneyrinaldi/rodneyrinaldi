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
              <Link href="http://github.com/rodneyrinaldi">
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
                    src="/rr-body.png"
                    alt="rodney rinaldi dpo"
                    layout="intrinsic"
                    width={36}
                    height={36}
                  />
                </a>
              </Link>
            </li>
          </ul>

        </nav>
      </div>
    </div>
  )
}