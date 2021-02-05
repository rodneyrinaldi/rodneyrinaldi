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
                <textarea id="contactMessage" />
                <div>
                  <Link href="htpps://dev.rodneyrinaldi.com">
                    <a className={styles.goForward}>
                      <span>ENVIAR</span>
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>

      <footer className='stripDark'>
        <div className={styles.tierFooter}>
          <nav>
            <ul>
              <li>
                <Link href="/advocacy">
                  <a>
                    <Image
                      src="/adv2.svg"
                      alt="rodney rinaldi adv"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
                Advocacia
              </li>
              <li>
                <Link href="/technology">
                  <a>
                    <Image
                      src="/dev2.svg"
                      alt="rodney rinaldi dev"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
                  Tecnologia
              </li>
              <li>
                <Link href="/compliance">
                  <a>
                    <Image
                      src="/dpo2.svg"
                      alt="rodney rinaldi dpo"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
               Privacidade
              </li>
            </ul>
          </nav>
        </div>
        <Link href="/">
          <a className={styles.goBack}>
            <Image
              src="/back.svg"
              alt="voltar"
              layout="intrinsic"
              width={14}
              height={14}
            />
            <span>VOLTAR</span>
          </a>
        </Link>
        <br />
      </footer>

    </>
  )
}
