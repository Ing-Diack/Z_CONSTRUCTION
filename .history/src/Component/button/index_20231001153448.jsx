import React from 'react';
import PropTypes from "prop-types"
import { styled } from 'styled-components';


function Button({text, color,size}) {

    const Button=styled.button`
        background-color:#ffffff;
        font-weight:bold;
        padding:15px;
        font-size:${size};
        border:4px solid ${color};
        color:${color};
        cursor:pointer;
        letter-spacing:0.3em;
        transition:0.5s all ease-out;
        &:hover{
          background-color:${color};
          color:#ffffff;
        }
        @media screen and (max-width: 768px) {
          font-size:1.2em;
          letter-spacing:normal;
          padding:3px;
          align-items:center;
        }
    `

  return (
    <Button> {text} <i class="fa fa-arrow-right fleche " aria-hidden="true"></i></Button>
  )
}
Button.propTypes={
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
    size:PropTypes.string
}
Button.defaultProps={
    color:"#bb2d3b",
    size:"1.3em"
}

export default Button;