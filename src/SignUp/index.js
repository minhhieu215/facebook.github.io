import React from 'react'
import SignUpInput from '../components/SignUpInput'
import styled from 'styled-components'
import FooterLogin from '../components/FooterLogin'
const LoginWrapper = styled.div`
`
const SignUp = () => {
  return (
    <LoginWrapper className="Login">

      <SignUpInput/>
      <FooterLogin/>
    </LoginWrapper>
  )
}

export default SignUp