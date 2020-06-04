import React from "react"
import PropTypes from "prop-types"

import ArticleImage from "./image"
import BlogIcon from "../../nav1/blog"
import "./style.css"
import * as S from "./styled"

const L2Articles = ({ children }) => {
  return (
    <>
      <S.L2ArticleWrapper id='L2Articles'>

        <S.L2Article to="/blog">
          <div className="article-body">
            <ArticleImage areaImg="img-area-adv.png" />
            <S.L2ArticleTitle>adv</S.L2ArticleTitle>
            <div>
              <S.L2ArticleDate>10-10-2010</S.L2ArticleDate>
              <S.L2ArticleTimeRead>leitura: 10 min</S.L2ArticleTimeRead>
            </div>
            <S.L2ArticleText>Text</S.L2ArticleText>
          </div>
          <div className="article-footer">
            <S.BlogLink to="/blog"><BlogIcon /></S.BlogLink>
          </div>
        </S.L2Article>

        <S.L2Article to="/blog">
          <div className="article-body">
            <ArticleImage areaImg="img-area-dev.png" />
            <S.L2ArticleTitle>dev</S.L2ArticleTitle>
            <div>
              <S.L2ArticleDate>10-10-2010</S.L2ArticleDate>
              <S.L2ArticleTimeRead>leitura: 10 min</S.L2ArticleTimeRead>
            </div>
            <S.L2ArticleText>Text</S.L2ArticleText>
          </div>
          <div className="article-footer">
            <S.BlogLink to="/blog"><BlogIcon /></S.BlogLink>
          </div>
        </S.L2Article>

        <S.L2Article to="/blog">
          <div className="article-body">
            <ArticleImage areaImg="img-area-dpo.png" />
            <S.L2ArticleTitle>dpo</S.L2ArticleTitle>
            <div>
              <S.L2ArticleDate>10-10-2010</S.L2ArticleDate>
              <S.L2ArticleTimeRead>leitura: 10 min</S.L2ArticleTimeRead>
            </div>
            <S.L2ArticleText>Text</S.L2ArticleText>
          </div>
          <div className="article-footer">
            <S.BlogLink to="/blog"><BlogIcon /></S.BlogLink>
          </div>
        </S.L2Article>

      </S.L2ArticleWrapper >
    </>
  )
}

L2Articles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default L2Articles


