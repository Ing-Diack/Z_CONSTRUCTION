import React from 'react';
import styled from 'styled-components';

export default function Card({img, title, describle}) {
    const CardWrapper = styled.div`
    width:20em;
    background-color:#ffffff;
    border-radius:2em;
    border-radius:0 0 2em rgba(0,0,0,0.2);
    padding: 2em 1em;
    display: flex;
    align-items: center;
    flex-direction: column;
    `
    const CardImage=styled.div`
        width: 15em;
        height: 13em;
        border-radius:3px;
        margin-bottom: 1.5em;
    `
 
        const Image=styled.img`
            width: 100%;
            height: 100%;
            border-radius:3px;
            object-fit: cover;
        `
       
        
        const CardContent=styled.div`
            display: flex;
            align-items: center;
            flex-direction: column;
        `
        
        const CardTitle= styled.span`
            font-size: 1.5em;
            font-weight: 500;
            font-family: 'Times New Roman', Times, serif;
            margin-bottom: 1.5em;
        `
  return (
  
    <CardWrapper>
        <CardImage>
            <Image src={img} alt={title}/>
        </CardImage>
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <p>{describle}</p>
        </CardContent>
    </CardWrapper>
  )

  
}
