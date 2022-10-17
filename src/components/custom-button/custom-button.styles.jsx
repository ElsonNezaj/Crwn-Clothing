import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: black;
  border: 1px solid transparent;
  color: white;
`

const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid white;


    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`

const googleSignInStyles = css`
 
    background-color: #4285f4;
    color: white;
    border: 1px solid transparent;

    &:hover {
      background-color: #3578e8;
      border: 1px solid transparent;
    }
  }
`

const getButtonStyles = (props) => {
  const { isGoogleSignIn, inverted } = props
  if (isGoogleSignIn) {
    return googleSignInStyles
  }

  return inverted ? InvertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Encode Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}
`
