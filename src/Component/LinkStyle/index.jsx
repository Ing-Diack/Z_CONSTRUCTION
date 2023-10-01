import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LinkStyle({ text, color, backgroundColor, link}) {

    const LinkStyle = styled(Link)`
        
            padding:5px 10px;
            border:1px solid black;
            border-radius:3px;
            background-color:white;
            font-size:0.8em;
            font-family:Arial,Helvetica,sans-serif;
            color:${color};
            text-decoration:none;
            &:hover{
                background-color:${backgroundColor} ;
                color:white;
                border:1px solid ${backgroundColor};
            }

        `
  return (
    <LinkStyle to={link}> {text}</LinkStyle>
  )
}
   LinkStyle.propTypes={
      text: PropTypes.string,
      color:PropTypes.string,
      backgroundColor:PropTypes.string,
      link:PropTypes.string 
   }
   LinkStyle.defaultProps={
    color:'black',
    backgroundColor:'#dc3545'
   }
export default LinkStyle