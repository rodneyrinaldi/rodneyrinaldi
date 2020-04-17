import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import "./style.css"

const Post = ({ children }) => {
  return (
    <S.PostWrapper>
      <h1 className="post-title">Titulo do artigo</h1>
      <div className="div-datetime">
        <h1 className="post-date">2020-09-20
          <span className="post-time">15 min leitura</span>
        </h1>

      </div>
      <div className="div-description">
        <div className="post-type">adv</div>
        <h1 className="post-description">description asfdasfdasf asdfsd
        asdfasdf asfdasfdasf asdfsd asdfasdf asfdasfdasf asdfsd asdfasdf
        asfdasfdasf asdfsd asdfasdf asfdasfdasf asdfsd asdfasdf asfdasfdasf
        asdfsd asdfasdf asf
        </h1>
      </div>
    </S.PostWrapper>
  )
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Post