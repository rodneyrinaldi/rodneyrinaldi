import React from 'react';

import Icons from './Icons';
import links from './content';

import * as S from './styled';

const MidiaLink = () => (
  <S.MidiaWapper>
    <S.MidiaLinkList>

      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.MidiaLinkItem key={i}>
            <S.MidiaLinkLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer" >

              <S.IconWrapper>
                {Icon}
              </S.IconWrapper>
            </S.MidiaLinkLink>
          </S.MidiaLinkItem>
        )
      })}

    </S.MidiaLinkList>
  </S.MidiaWapper>
)

export default MidiaLink;