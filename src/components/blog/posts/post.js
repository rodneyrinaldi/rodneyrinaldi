import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import "./style.css"

const Post = ({ slug, category, date, description, title, timetoread }) => {
  return (
    <S.PostWrapper to={slug}>
      <h1 className="post-title">{title}</h1>
      <div className="div-datetime">
        <h1 className="post-date">{date}
          <span className="post-time">{timetoread} min para leitura</span>
        </h1>
      </div>
      <div className="div-description">
        <div className={'post-type post-type-' + category}>{category}</div>
        <h1 className="post-description">{description}</h1>
      </div>
    </S.PostWrapper >
  )
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Post