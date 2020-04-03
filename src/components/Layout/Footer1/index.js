import React from "react";
import * as S from "./styled";
import MidiaLink from "../Midias";

const Footer1 = () => (
  <>
    <S.Footer1Wrapper>
      <S.Footer1Sites>
        <S.Footer1Title>SITES</S.Footer1Title>
        <p><S.Footer1Link> •  advocacia  http://adv.rodneyrinaldi.com</S.Footer1Link></p>
        <p><S.Footer1Link> •  administração de dados  http://dba.rodneyrinaldi.com</S.Footer1Link></p>
        <p><S.Footer1Link> •  desenvolvimento de sitemas  http://dev.rodneyrinaldi.com</S.Footer1Link></p>
        <p><S.Footer1Link> •  proteção de dados  http://dpo.rodneyrinaldi.com</S.Footer1Link></p>
        <p><S.Footer1Link> •  escritório de projetos  http://pmo.rodneyrinaldi.com</S.Footer1Link></p>
      </S.Footer1Sites>
      <S.Footer1Midias>
        <MidiaLink />
      </S.Footer1Midias>
      <S.Footer1Pages>
        <p><S.Footer1Title>PAGES</S.Footer1Title></p>
        <p><S.Footer1Link>direito como exercício da cidadania • </S.Footer1Link></p>
        <p><S.Footer1Link>conformidade e proteção de dados • </S.Footer1Link></p>
        <p><S.Footer1Link>arquitetura e desenvolvimento de sistemas • </S.Footer1Link></p>
        <p><S.Footer1Link>artigos, notícias e blog • </S.Footer1Link></p>
        <p><S.Footer1Link>about • </S.Footer1Link></p>
      </S.Footer1Pages>
    </S.Footer1Wrapper>
  </>
)

export default Footer1