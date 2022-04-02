import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 430px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        margin-bottom: 50px;
        width: 70%;
    }
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;


export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
      display: flex;
      justify-content: space-around;
      width: auto;

      *{
        padding: 0 10px;
        width: auto;
      }

      }
`