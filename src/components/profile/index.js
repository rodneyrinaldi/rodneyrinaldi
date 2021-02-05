import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Logo() {
  return (
    <>
      <div className='stripDark'>
        <div className={styles.tierMain}>

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
            <p>Direito Civil e Processual, Imobiliário, Empresarial, Trabalhista, Digital e Trânsito</p>
            <p>Processamento de Dados e Engenharia Mecânica, Pós em Projetos e MBA em Negócios</p>
            <p>Desenvolvimento Javascript e .NET; SAP CRM, Dynamics CRM e SalesForce</p>
            <p>Databases Oracle, Sqlserver, Mongodb, Postgres, Mysql e Redis</p>
            <p>Inglês e Espanhol avançados</p>
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

        </div>
      </div>
    </>
  )
}
