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
              <Link href="#">
                <a>
                  <Image
                    src="/linkedin.svg"
                    alt="rodney rinaldi adv"
                    layout="intrinsic"
                    width={28}
                    height={28}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image
                    src="/github.svg"
                    alt="rodney rinaldi dev"
                    layout="intrinsic"
                    width={28}
                    height={28}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image
                    src="/facebook.svg"
                    alt="rodney rinaldi dpo"
                    layout="intrinsic"
                    width={28}
                    height={28}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image
                    src="/twitter.svg"
                    alt="rodney rinaldi dpo"
                    layout="intrinsic"
                    width={28}
                    height={28}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
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