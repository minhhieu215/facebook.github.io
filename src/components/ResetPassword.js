import React from 'react'
import styled from 'styled-components'
import { Row , Col  ,Input, Button , Typography , Comment , Menu , Divider} from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '.././context/AuthProvider'

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
`
const SuccessButtonStyled = styled(ButtonStyled)`
background-color:#42b72a;
border:solid #42b72a;
width:fit-content;
margin-inline:auto;
left: 50%;
transform: translateX(-50%);
`
const LinkCenter = styled.div` 
text-align:center;
padding-top:10px;
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
const ResetPassword = () => {
    const navigate= useNavigate()

const [email, setEmail] =React.useState()
const [password, setPassword] =React.useState()
const [ errorMessage , setErrorMessage ] =React.useState()
const {resetpass,currentUser} =useAuth()
const [successMesasge,setSuccessMessage] =React.useState()
   async   function  handleClick(){
        if(email){
         try{
             await resetpass(email)       
             setSuccessMessage("Thành Công") 
           navigate("/login")
        }catch { 
            setErrorMessage("Sai tài khoản hoặc mật khẩu !")
        }
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
                <Typography.Title style={{color:"green"}}>{successMesasge}</Typography.Title>
                <Typography.Title style={{color:"red"}}>{errorMessage}</Typography.Title>
                <Typography.Title>Đặt lại mật khẩu</Typography.Title>
                    <InputStyled value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email hoặc số điện thoại"/>
                    <ButtonStyled onClick={handleClick} type="primary">Đặt lại mật khẩu</ButtonStyled>
                    <Divider/>
                </FormInputStyled>
            </Col>
        </RowWrapper>
    </LoginInputStyled>
  )
}

export default ResetPassword