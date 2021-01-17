import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Nav() {
  return (
    <div className='stripLight'>
      <div className={styles.tierMain}>
        <nav>
          <ul>
            <li>
              <Link href="/advocacy">
                <a>
                  <Image
                    src="/adv.svg"
                    alt="rodney rinaldi adv"
                    layout="intrinsic"
                    width={128}
                    height={128}
                  />
                </a>
              </Link>
            Advocacia
          </li>
            <li>
              <Link href="/technology">
                <a>
                  <Image
                    src="/dev.svg"
                    alt="rodney rinaldi dev"
                    layout="intrinsic"
                    width={128}
                    height={128}
                  />
                </a>
              </Link>
            Tecnologia
          </li>
            <li>
              <Link href="/compliance">
                <a>
                  <Image
                    src="/dpo.svg"
                    alt="rodney rinaldi dpo"
                    layout="intrinsic"
                    width={128}
                    height={128}
                  />
                </a>
              </Link>
            Privacidade
          </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}