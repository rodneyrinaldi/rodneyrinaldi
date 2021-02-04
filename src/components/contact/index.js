import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Contact() {
  return (
    <>
      <header className="stripDark">
        <div className={styles.tierHeader}>
          <Link href="/">
            <a>
              <Image
                src="/rodneyrinaldi.svg"
                alt="foto rodney rinaldi"
                layout="intrinsic"
                width={300}
                height={50}
              />
            </a>
          </Link>
        </div>
      </header>

      <main className='stripLight'>
        <div className={styles.tierMain}>

          <h2>Contato</h2>
          <h3>
            Tire suas dúvidas, modele suas ideias, desenvolva seu projeto.
          </h3>

          <div className={styles.tierArticles}>
            <div className={styles.imgArticle}>
              <Image
                src="/contact.png"
                alt="customer centricity"
                layout="intrinsic"
                width={200}
                height={200}
              />
            </div>
            <div>
              <form action="">
                <label htmlFor="contactName">Nome</label>
                <input type="text" id="contactName" />
                <label htmlFor="contactEmail">Email</label>
                <input type="text" id="contactEmail" />
                <label htmlFor="contactMessage">Mensagem</label>
                <input type="text" id="contactMessage" />
                <div>
                  <Link href="htpps://dev.rodneyrinaldi.com">
                    <a className={styles.goForward}>
                      <spam>ENVIAR</spam>
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>

      <footer className='stripDark'>
        <br />
        <Link href="/">
          <a className={styles.goBack}>
            <Image
              src="/back.svg"
              alt="voltar"
              layout="intrinsic"
              width={14}
              height={14}
            />
            <spam>VOLTAR</spam>
          </a>
        </Link>
        <br />
      </footer>
    </>
  )
}
