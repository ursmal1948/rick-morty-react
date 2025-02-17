import styled from "styled-components";

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
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;

  @media (max-width: 372px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
