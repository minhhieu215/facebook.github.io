import React from 'react'
import styled from 'styled-components'
import { Row , Col  ,Input, Button , Typography , Comment , Menu , Divider} from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuth } from ".././context/AuthProvider"
const LoginInputStyled = styled.div`
height :100vh;
background:#f0f2f5;
display:flex;
justify-content:space-between;
padding-inline: 90px 20px;
align-items:center;
`
const ImgLogo = styled.img`
transform : scale(0.8);
`
const ButtonStyled = styled(Button)`
width:100%;
font-weight:bold;
font-size: 20px;
height:fit-content;
border-radius:8px;
margin-bottom:10px;
`
const FormInputStyled = styled.div`
background:white;
box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
padding: 30px 28px;
border-radius:10px;
width:396px;
`
const InputStyled = styled(Input)`
padding: 14px 16px;
font-size: 17px;
border-radius: 6px;
margin-bottom:10px;
`
const RowWrapper = styled(Row)`
display:flex;
align-items:center;`
const LoginInput =  () => {
    const navigate= useNavigate()
    const [ email , setEmail ] =React.useState()
    const [ password, setPassWord] = React.useState()
    const [ passwordConfirm, setPassWordConfirm ] = React.useState()
    const [ errorMessage, setErrorMessage] =React.useState("")
    const [ successMesasge, setSuccessMessage] =React.useState("")
    const {signUp,currentUser, displayName ,setDisplayName} =useAuth()
    async  function  handleSubmit(){
        if(password!=passwordConfirm){
            return setErrorMessage("Password không ăn nhập gì với nhau luôn á :)")
        }
        try{
            setErrorMessage("")
            await signUp(email,password)
            setSuccessMessage("THÀNH CÔNG RỒI !")
            console.log(currentUser)
        }catch{
            setErrorMessage("Thất bại trong việc tạo tài khoản ~.~!")
        }
    }
  return (
    <LoginInputStyled>
        <RowWrapper >
            <Col span={12}>
                <ImgLogo src={require(".././images/logo.png")}/>
                <Typography.Title level={3}>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</Typography.Title>
            </Col>
            <Col span={9}>
                <FormInputStyled>
                    <Typography.Text style={{textAlign:"center", color:"red"}}>{errorMessage}</Typography.Text>
                    <Typography.Text style={{textAlign:"center", color:"green"}}>{successMesasge}</Typography.Text>
                    <Typography.Title style={{textAlign:"center"}}>Sign Up</Typography.Title>
                    <InputStyled value={displayName} onChange={(e)=>setDisplayName(e.target.value)} placeholder="Nhập tên"/>
                    <InputStyled value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email hoặc số điện thoại"/>
                    <InputStyled type="password" value={password} onChange={(e)=>setPassWord(e.target.value)} placeholder="Mật khẩu"/>
                    <InputStyled type="password" value={passwordConfirm} onChange={(e)=>setPassWordConfirm(e.target.value)} placeholder="Nhập lại mật khẩu"/>
                    <ButtonStyled onClick={()=>handleSubmit()} type="primary">Sign Up</ButtonStyled>
                    <ButtonStyled onClick={()=>navigate("/login")} type="success">Có tài khoản rồi</ButtonStyled>
                    <Divider/>

                </FormInputStyled>
            </Col>
        </RowWrapper>
    </LoginInputStyled>
  )
}

export default LoginInput