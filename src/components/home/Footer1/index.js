import React from "react";
import * as S from "./styled";
import MidiaLink from "../../Midias";

const Footer1 = () => (
  <>
    <S.Footer1Wrapper>
      <S.Footer1Sites>
        <S.Footer1Title>SITES</S.Footer1Title>
        {/* <S.Footer1Link> •  adv  http://adv.rodneyrinaldi.com</S.Footer1Link>
        <S.Footer1Link> •  dba  http://dba.rodneyrinaldi.com</S.Footer1Link>
        <S.Footer1Link> •  dev  http://dev.rodneyrinaldi.com</S.Footer1Link>
        <S.Footer1Link> •  dpo  http://dpo.rodneyrinaldi.com</S.Footer1Link>
        <S.Footer1Link> •  pmo  http://pmo.rodneyrinaldi.com</S.Footer1Link> */}
      </S.Footer1Sites>
      <S.Footer1Midias>
        <MidiaLink />
      </S.Footer1Midias>
      <S.Footer1Pages>
        <S.Footer1Title>PAGES</S.Footer1Title>
        {/* <S.Footer1Link>direito como exercício da cidadania • </S.Footer1Link>
        <S.Footer1Link>conformidade e proteção de dados • </S.Footer1Link>
        <S.Footer1Link>arquitetura e desenvolvimento de sistemas • </S.Footer1Link>
        <S.Footer1Link>artigos, notícias e blog • </S.Footer1Link> */}
      </S.Footer1Pages>
    </S.Footer1Wrapper>
  </>
)

export default Footer1