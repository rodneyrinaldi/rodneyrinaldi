import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const L3Contact = ({ children }) => {
  return (
    <>
      <S.L3ContactWrapper id='L3Contact'>
        <S.L3ContactTitle>C O N T A T O</S.L3ContactTitle>
        <form method="post" action="#">
          <label>
            Name
          <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
          <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
          <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
          <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit" to="/success">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </S.L3ContactWrapper>
    </>
  )
}

L3Contact.propTypes = {
  children: PropTypes.node.isRequired,
}

export default L3Contact

