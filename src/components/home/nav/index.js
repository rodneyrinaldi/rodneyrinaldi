import Image from 'next/image'

import styles from './index.module.css'

export default function Nav() {
  return (
    <div className={styles.navLayer}>
      <nav>
        <ul>
          <li>
            <Image
              src="/adv.svg"
              alt="rodney rinaldi adv"
              layout="intrinsic"
              width={128}
              height={128}
            />
            Advocacia
          </li>
          <li>
            <Image
              src="/dev.svg"
              alt="rodney rinaldi dev"
              layout="intrinsic"
              width={128}
              height={128}
            />
            Tecnologia
          </li>
          <li>
            <Image
              src="/dpo.svg"
              alt="rodney rinaldi dpo"
              layout="intrinsic"
              width={128}
              height={128}
            />
            Conformidade
          </li>
        </ul>

      </nav>
    </div>
  )
}