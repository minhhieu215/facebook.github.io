import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Row , Col  ,Input , Typography , Space , Menu , Affix} from 'antd'
import { SearchOutlined , HomeFilled  ,UserOutlined, LogoutOutlined , TableOutlined ,HolderOutlined , MessageFilled, NotificationFilled , CaretDownFilled} from '@ant-design/icons';
import  InputSearch from './InputSearch'
import { AppContext } from '.././context/AppProvider'
import { useAuth } from '.././context/AuthProvider'
import { onSnapshot , doc, query } from 'firebase/firestore'
const HeaderMainPage = () => {

    const { isInputSearch ,notiNum,setNotiNum, setIsInputSearch,isNotiVisible ,setIsNotiVisible} = React.useContext(AppContext)
    const [ activePage, setActivePage ] = useState("homepage")
    const { logout,signUp,currentUser }=useAuth()
    const navigate=useNavigate()
    console.log(currentUser)
    React.useEffect(()=>{
        navigate("/"+activePage)
    },[activePage])
    console.log(setIsInputSearch)
    const HeaderAffix = styled(Affix)`
    padding-inline:10px;
    height:fit-content;
    background-color:white;
  padding-top:10px;
  padding-bottom:10px;
  z-index:1;
    
    &&& {
        .icon { 
            font-size:27px;
             width:50%;
              height:100%;
              display:flex;
              align-items:center;
              justify-content:center;
        }
        .icon.active{
            border-bottom:solid 4px #1b74e4;
            color:#1b74e4 ; 

        }
       .drop{ 
        background-color:#f0f2f5;
        padding-inline:20px;
        display: flex;
        height:100%;
        align-items: center;
        font-size:20px;
        border-radius:50%;
        cursor:pointer;
    margin-left:10px; 
        }
    }
   
    `
    const NotificationNum = styled(Typography.Text)`
    padding: 5px;
    background-color: red;
    color: white;
    font-size: 10px;
    border-radius: 22%;
    top:-20px;
    right:0;
    position:absolute;
    `
    const ColAlignCenter = styled(Col)`
    display:flex;
    align-items:center;`
   async function handleLogOut(){
            await logout()
             navigate('/signUp')
  }

  return (
    <HeaderAffix  style={{ position: 'sticky ', top: 0 }}>
        <Row  style={{marginTop:"10px",marginBottom:"10px"}} >
    <ColAlignCenter span={7}>
            <img src={require(".././images/icon.png")}/>
            <SearchOutlined onClick={(e)=>{
                e.stopPropagation()
                setIsInputSearch(true)
                }}className="drop"/>
             {isInputSearch ?<InputSearch/>:null}
        </ColAlignCenter>
        <ColAlignCenter span={10}>
            <HomeFilled value="homepage"  onClick={()=>setActivePage("homepage")}  className={`icon ${activePage=="homepage"?"active":""}`} />
            <UserOutlined  value="friendpage"onClick={()=>setActivePage("friendpage")}   className={`icon ${activePage =="friendpage"?"active":""}`} />
        </ColAlignCenter>
        <ColAlignCenter span={7}>
            <HolderOutlined  className="drop"/>
            <MessageFilled className="drop" />
            <div style={{position:"absolute"}}>
            <NotificationFilled onClick={()=>{
                setIsNotiVisible(!isNotiVisible)
                setNotiNum(0)
                }} className="drop" />
                <NotificationNum>{notiNum}</NotificationNum>
            </div>
            <CaretDownFilled className="drop" />
            <LogoutOutlined  onClick={handleLogOut}className="drop"/>
        </ColAlignCenter>
        </Row>
    </HeaderAffix>
  )
}
export default HeaderMainPage