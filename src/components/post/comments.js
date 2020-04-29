import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import propTypes from "prop-types"

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `http://rodneyrinaldi.com${url}`

  return (
    <S.CommentsWapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="jonhdoe"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWapper>
  )
}

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}

export default Comments