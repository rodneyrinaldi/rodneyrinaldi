import React from "react";
import * as S from "./styled";
import MidiaLink from "./Midias";

const Footer = () => (
  <>
    <S.FooterWrapper>
      <S.FooterSites>
        <S.FooterTitle>SITES</S.FooterTitle>
        <p><S.FooterLink> •  advocacia  http://adv.rodneyrinaldi.com</S.FooterLink></p>
        <p><S.FooterLink> •  administração de dados  http://dba.rodneyrinaldi.com</S.FooterLink></p>
        <p><S.FooterLink> •  desenvolvimento de sitemas  http://dev.rodneyrinaldi.com</S.FooterLink></p>
        <p><S.FooterLink> •  proteção de dados  http://dpo.rodneyrinaldi.com</S.FooterLink></p>
        <p><S.FooterLink> •  escritório de projetos  http://pmo.rodneyrinaldi.com</S.FooterLink></p>
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