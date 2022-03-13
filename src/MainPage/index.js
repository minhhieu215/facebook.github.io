import React from 'react'
import HeaderMainPage from '../components/HeaderMainPage'
import { Row , Col  ,Input , Typography , Space , Menu , Affix} from 'antd'
import SideBar from '../components/SideBar'
import SideBarRight from '../components/SideBarRight'
import Content from '../components/Content'
import { AppContext } from '.././context/AppProvider'
import MessageChat from '.././components/MessageChat'
import PostStatus from '.././components/PostStatus'
import styled from 'styled-components'
import { useAuth } from '.././context/AuthProvider'
import { useNavigate } from 'react-router-dom'
const MainPage = () => {
  const {setIsInputSearch , setIsVisibleMessChat, isVisibleMessChat,userChattings,setUserChattings} = React.useContext(AppContext)
  const MainPageWrapper = styled.div`
  background-color:#f0f2f5;
  z-index:1;
  `
  const AffixedStyled = styled(Affix)`
  position:fixed ;
   right:25vw ;
   bottom:0;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
width:60vw;
  `
  const navigate= useNavigate()
  const { currentUser }=useAuth()
  if(!currentUser){
    navigate("/login")
  }
  return (
    <MainPageWrapper onClick={()=>setIsInputSearch(false)}>
      <Row style={{padding:"10px"}}>
        <Col span={4}>
          <SideBar/>
        </Col>
        <Col span={2}/>
        <Col span={11}>
          <PostStatus/>
          <Content/>
        </Col>
        <Col span={2}/>
        <Col span={5}>
<AffixedStyled  className="affix" >
            <div style={{display:"flex", gap:"20px"}}>
              {userChattings.map(userChatting=>(
          <MessageChat name={userChatting.displayName}/>
              ))}
            </div>
          </AffixedStyled>
          <SideBarRight/>
        </Col>
      </Row>
    </MainPageWrapper>
  )
}

export default MainPage