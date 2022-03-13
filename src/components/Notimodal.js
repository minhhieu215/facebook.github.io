import React from 'react'
import styled from 'styled-components'
import { AppContext } from '.././context/AppProvider'
import NotiItem from './NotiItem'
import { Row , Col  ,Button , Typography , Modal , Menu , Avatar, Spin} from 'antd'
const ButtonStyled = styled(Button)`
border-radius:15px;
font-weight:bold;
`
const Notimodal = () => {
    const {isLoading,setIsLoading , NotificationList,isNotiVisible ,setIsNotiVisible,statusFilterNoti , setStatusFilterNoti} =React.useContext(AppContext)
    const handleOk=()=>{
        setIsNotiVisible(false)
    }
    const handleCancel=()=>{
        setIsNotiVisible(false)
    }
  return (
 <Modal title="Thông báo" onOk ={handleOk} onCancel={handleCancel}visible={isNotiVisible}>
    <Row>
    <ButtonStyled onClick={()=>{
      
      setStatusFilterNoti("")}}style={{marginRight:"10px"}}>Tất cả</ButtonStyled>
    <ButtonStyled onClick={()=>{
      
      setStatusFilterNoti("unseen")}}>Chưa đọc</ButtonStyled>
        </Row> 
    <div>
         <Typography.Title  style={{marginTop:"10px"}} level={4}>Mới</Typography.Title>
 
     {statusFilterNoti?NotificationList.filter(mocktaNotification=>mocktaNotification.status==statusFilterNoti&&mocktaNotification.timeline=="new").map(mockNotification=><NotiItem content={mockNotification.content} status = {NotificationList.status}></NotiItem>):NotificationList.filter(mocktaNotification=>mocktaNotification.timeline=="new").map(mockNotification=><NotiItem content={mockNotification.content} status = {mockNotification.status}></NotiItem>)}
         </div>
         <div>
         <Typography.Title  style={{marginTop:"10px"}} level={4}>Cũ</Typography.Title>
 
     {statusFilterNoti?NotificationList.filter(mocktaNotification=>mocktaNotification.status==statusFilterNoti&&mocktaNotification.timeline=="old").map(mockNotification=><NotiItem content={mockNotification.content} status = {NotificationList.status}></NotiItem>):NotificationList.filter(mocktaNotification=>mocktaNotification.timeline=="old").map(mockNotification=><NotiItem content={mockNotification.content} status = {mockNotification.status}></NotiItem>)}
         </div>
 </Modal>
  )
}

export default Notimodal