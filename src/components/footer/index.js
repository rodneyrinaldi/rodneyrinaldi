import React from "react";
import * as S from "./styled";
import MidiaLink from "./Midias";

const Footer = () => (
  <>
    <S.FooterWrapper>
      <S.FooterSites>
        <S.FooterTitle>SITES</S.FooterTitle>
        <p><S.FooterLink
          href="http://adv.rodneyrinaldi.com"
          title="adv.rodneyrinaldi.com"
          rel="noopener noreferrer"> •  advocacia  http://adv.rodneyrinaldi.com</S.FooterLink></p>
        <p><S.FooterLink
          href="http://dba.rodneyrinaldi.com"
          title="dba.rodneyrinaldi.com"
          rel="noopener noreferrer"> •  administração de dados  http://dba.rodneyrinaldi.com</S.FooterLink></p>
        <p><S.FooterLink
          href="http://dev.rodneyrinaldi.com"
          title="dev.rodneyrinaldi.com"
          rel="noopener noreferrer"> •  desenvolvimento de sitemas  http://dev.rodneyrinaldi.com</S.FooterLink></p>
        <p><S.FooterLink
          href="http://dpo.rodneyrinaldi.com"
          title="dpo.rodneyrinaldi.com"
          rel="noopener noreferrer"> •  proteção de dados  http://dpo.rodneyrinaldi.com</S.FooterLink></p>
        <p><S.FooterLink
          href="http://pmo.rodneyrinaldi.com"
          title="pmo.rodneyrinaldi.com"
          rel="noopener noreferrer"> •  escritório de projetos  http://pmo.rodneyrinaldi.com</S.FooterLink></p>
      </S.FooterSites>
      <S.FooterMidias>
        <MidiaLink />
      </S.FooterMidias>
      <S.FooterPages>
        <p><S.FooterTitle>PAGES</S.FooterTitle></p>
        <p><S.FooterLink>direito como exercício da cidadania • </S.FooterLink></p>
        <p><S.FooterLink>conformidade e proteção de dados • </S.FooterLink></p>
        <p><S.FooterLink>arquitetura e desenvolvimento de sistemas • </S.FooterLink></p>
        <p><S.FooterLink>artigos, notícias e blog • </S.FooterLink></p>
        <p><S.FooterLink>about • </S.FooterLink></p>
      </S.FooterPages>
    </S.FooterWrapper>
  </>
)

export default Footer