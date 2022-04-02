import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        margin: 20px 20px auto;
        width: auto;
        align-items: center;

    }
`;