import React from 'react'
import LoginInput from '../components/LoginInput'
import styled from 'styled-components'
import FooterLogin from '../components/FooterLogin'
const LoginWrapper = styled.div`
`
const Login = () => {
  return (
    <LoginWrapper className="Login">

      <LoginInput/>
      <FooterLogin/>
    </LoginWrapper>
  )
}

export default Login