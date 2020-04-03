import React from 'react';

import Icons from './Icons';
import links from './content';

import * as S from './styled';
import Cartoon from "../../cartoon";

const MidiaLink = () => (
  <S.MidiaWapper>
    <S.MidiaLinkList>

      {links.map((link, i) => {
        const Icon = Icons[link.lable];

        return (
          <S.MidiaLinkItem key={i}>
            <S.MidiaLinkLink
              href={link.url}
              title={link.lable}
              target="_blank"
              rel="noopener noreferrer" >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.MidiaLinkLink>
          </S.MidiaLinkItem>
        )
      })}

      <Cartoon />

    </S.MidiaLinkList>
  </S.MidiaWapper>
)

export default MidiaLink;