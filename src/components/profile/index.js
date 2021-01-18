import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Logo() {
  return (
    <>
      <div className='stripDark'>
        <div className={styles.tierMain}>

          <div className={styles.goBack}>
            <Link href="/">
              <a className={styles.buttonBack}>
                <Image
                  src="/back.svg"
                  alt="voltar"
                  layout="intrinsic"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </div>

          <div>
            <Image
              src="/profile.png"
              alt="foto rodney rinaldi"
              layout="intrinsic"
              width={105}
              height={113}
            />
            <Image
              src="/rodneyrinaldi.svg"
              alt="rodney rinaldi"
              layout="intrinsic"
              width={390}
              height={77}
            />
            <h3>adv & dev</h3>
            <p>Formação em Direito e Tecnologia com pós-graduações em Direito, Negócios e Comunicação</p>
            <p>Direito Civil e Processual, Imobiliário, Empresarial, Trabalhista, Digital e Tânsito</p>
            <p>Ecossistemas Javascript e Microsoft; SAP CRM, Dynamics CRM e SalesForce</p>
            <p>Oracle, Sqlserver, Mongodb, Postgres, Mysql e Redis</p>
            <p>Inglês e Espanhol avançados</p>
          </div>
        </div>
      </div>
    </>
  )
}
