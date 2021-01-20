import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Technology() {
  return (
    <>
      <header className="stripDark">
        <div className={styles.tierHeader}>
          <Image
            src="/rodneyrinaldi.svg"
            alt="foto rodney rinaldi"
            layout="intrinsic"
            width={1800}
            height={703}
          />
        </div>
      </header>

      <main className='stripLight'>
        <div className={styles.tierMain}>

          <h3>Foco no Cliente</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aperiam qui neque. Ipsam tenetur, odio, excepturi voluptates quam ullam natus neque incidunt corporis iure deleniti aliquam aliquid minima voluptatum necessitatibus.</p>

          <div className={styles.tierArticles}>
            <div className={styles.divImg}>
              <Image
                src="/dev.svg"
                alt="customer centricity"
                layout="intrinsic"
                width={1800}
                height={703}
              />
            </div>
            <div className={styles.divImg}>
              <Image
                src="/dev.svg"
                alt="customer centricity"
                layout="intrinsic"
                width={1800}
                height={703}
              />
            </div>
          </div>

          <h3>Foco no Cliente</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit, voluptas eaque perferendis incidunt nemo pariatur. Totam earum fuga beatae! Aperiam esse dolore cumque quas voluptatum dolor omnis quos consequatur.</p>

          <div className={styles.divImg}>
            <Image
              src="/technology.png"
              alt="customer centricity"
              layout="intrinsic"
              width={1800}
              height={703}
            />
          </div>

        </div>
      </main>

      <footer className='stripLight'>
        <Link href='/'>
          <a href='#' className='buttonBase colorDark'>VOLTAR</a>
        </Link>
      </footer>
    </>
  )
}
