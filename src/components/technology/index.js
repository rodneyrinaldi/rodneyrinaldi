import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Technology() {
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
                width={1800}
                height={703}
              />
            </a>
          </Link>
        </div>
      </header>

      <main className='stripLight'>
        <div className={styles.tierMain}>

          <h2>Foco no Cliente</h2>
          <h3>
            Estratégia de posicionamento do cliente em primeiro plano, promovendo a experiência de uma jornada memorável.
          </h3>

          <div className={styles.tierArticles}>
            <div className={styles.imgArticle}>
              <Image
                src="/techiconsfocus.png"
                alt="customer centricity"
                layout="intrinsic"
                width={200}
                height={200}
              />
            </div>
            <div>
              <p>
                Expertise no atendimento a clientes e consumidores fundada na experiência cumulada desde os anos 90,
                e tendo acompanhado a evolução do mercado desde a entrada do Código de Defesa do Consumidor,
                desenvolvimento de soluções Business to Business, Business to Consumer, Data Warehouse e Business Intelligence.
              </p>
              <p>
                Desenhe a solução mais adequada as suas necessidades,
                para isto utilize as tecnologias mais apropriadas,
                tenha tranquilidade durante a execução do projeto,
                participe ativamente do desenvolvimento gerenciado por metodologias ágeis.

              </p>
            </div>
          </div>

          <h2>Custo Benefício</h2>
          <h3>
            Estratégia de avaliação de um projeto quanto a sua aplicabilidade,
            demonstrando a viabilidade ou não a partir do estudo dos fatores positivos e negativos,
            presentes e futuros.
          </h3>

          <div className={styles.tierArticles}>
            <div className={styles.imgInvert}>
              <p>xxx</p>
              <p>xxx</p>
            </div>
            <div className={styles.imgArticle}>
              <Image
                src="/techiconscost.png"
                alt="customer centricity"
                layout="intrinsic"
                width={200}
                height={200}
              />
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
            <spam>VOLTAR</spam>
          </a>
        </Link>
      </footer>
    </>
  )
}
