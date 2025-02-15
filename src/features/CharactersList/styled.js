import styled, { css } from "styled-components";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";






export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;



        ${({ loader }) =>
    loader &&
    css`
      padding: 0px 40px 50px;

    

    `
  }
  ${({ charactersListFlag }) =>
    charactersListFlag &&
    css`
    padding:55px 35px 3px;

  `
  }

    ${({ characterDetailsFlag }) =>
      characterDetailsFlag &&
    css`
    padding:55px 35px 3px;

  `
  }
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  gap:40px 20px;


  @media (max-width: 1089px) {
    justify-content: space-around;

  }
  @media (max-width:739px) {
    justify-content: center; 
  }
}
`

export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
// margin-right:5px;
`


export const StyledCard = styled(Card)`

  width: 100%;
  max-width: 330px;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  /* gap:10px; */
  row-gap:5px;
  align-items: center;
  border-radius:8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background:#FFFFFF;
  transition: transform 0.3s linear;
  padding: 15px;
  max-height: 430px;

    &:hover{
      cursor: pointer;
      transform: scale(1.03);
  }

    ${({ characterDetailsFlag }) =>
      characterDetailsFlag &&
    css`

      max-width:700px;
      // grid-template-rows:auto 1fr;
      grid-template-columns:auto 1fr;

      // align-items:start;

      @media (max-width:739px) {
        //  justify-content: center; 
          // grid-template-rows:auto 1fr;
          grid-template-columns:none;
          max-height:730px;
          width:auto;

  }

    `}

    
      
`

export const CardContent=styled(Card.Content)`
  display: flex; // dodalam terraz
  flex-direction: column; // dodalam teraz
  text-align:center;
`

export const CardHeader = styled(Card.Header)`
  font-size: 22px;
  word-wrap:break-word;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: center;

`

export const CardDetail = styled(Card.Meta)`
  font-size: 16px;
  color:#7E839A;

`
export const StyledParagraph = styled.p`

  font-size: 16px;
  font-weight: 500;


   ${({ characterDetailsFlag }) =>
      characterDetailsFlag &&
    css`

      // align-self:flex-start;
      // justify-self:flex-end;
      // display:flex;

    `}
  `

export const StyledLink = styled(Link)`
  text-decoration:none;
  color:inherit
`

export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 100%;
  width: 300px;// dodalam
  height: auto; // todo dodac height 300 i pozniej bede zmniejszala. height bedzie auto. 
  border-radius: 5px;
`