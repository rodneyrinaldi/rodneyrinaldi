// https://docs.netlify.com/forms/setup/#submit-forms-via-ajax
//
import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import './style.css';

const L3Contact = ({ children }) => {
  return (
    <>
      <S.L3ContactWrapper id='L3Contact'>
        <S.L3ContactTitle>C O N T A T O</S.L3ContactTitle>
        <form method="post" action="#">
          <div className="lineWrapper">
            <div className="columnWrapper" >
              <input type="text" name="name" placeholder="Nome" id="name" />
            </div>
            <div className="columnWrapper">
              <input type="email" name="email" placeholder="E-mail" id="email" />
            </div>
          </div>
          <div className="lineWrapper">
            <div className="columnWrapper" >
              <textarea type="message" name="Message" placeholder="Mensagem" id="message" rows="5" />
            </div>
          </div>
          <div className="lineWrapper">
            <div className="columnWrapper">
              <button type="submit" to="/success">ENVIAR</button>
            </div>
            <div className="columnWrapper">
              <input type="reset" value="LIMPAR" />
            </div>
          </div>

        </form>
      </S.L3ContactWrapper>
    </>
  )
}

L3Contact.propTypes = {
  children: PropTypes.node.isRequired,
}

export default L3Contact

