import React from 'react'
import styled from 'styled-components'
import { Row , Col  ,Input , Typography , Avatar , Spin , Divider} from 'antd'
import {VideoCameraFilled , PhoneFilled,MinusCircleFilled,CloseOutlined,PlusCircleFilled,FileImageFilled,FileGifOutlined,SmileOutlined}  from '@ant-design/icons';
import Message from './Message'
import { AppContext } from '../context/AppProvider';
import { addDocument} from '.././firebase/service'
const MessageChatStyled = styled.div`
height:450px;
    width:25vw;
    background-color:whitesmoke;
    border:solid 1px lightgray;
    padding:10px;
    border-radius:5px;
    overflow:hidden;
    &&&{
        .icon{
            color:blue;
            font-size:15px;
            margin-right:5px;
            cursor:pointer;
            padding:3px;
            border-radius:50%;
        }
        .icon:hover{
            background-color:#f0f2f5;

        }
    }
    `
    const StatusOnStyled = styled.div`
    height: 10px;
  width: 10px;
  margin-right:5px;
  background-color: lightgreen;
  border-radius: 50%;
  display: inline-block;
    `
    const RowAlignCenter= styled(Row)`
    display:flex;
    align-items:center;
    `
    const FooterStyled = styled.div`
    position:absolute;
    bottom:0;
    height:50px;
    width:23vw;
    border-top:solid 1px lightgrey;
    padding:10px 0;
    
`
const InputNoneAnimation = styled(Input)`
    transition:none;
`
const ChatView = styled.div`
height:290px;
overflow-y:scroll;
overscroll-behavior:contain;
`

const MessageChat = ({name}) => {
    const [mess,setMess] = React.useState()
    const chatViewRef =React.useRef()
    const {setUserChattings,isLoading , setIsLoading,messages ,selectedRoomName, userChattings,selectedRoom} = React.useContext(AppContext)
    const [isOnInput , setIsOnInput] = React.useState(false)
    const [messList , setMessList] = React.useState([])
  return (
    <MessageChatStyled>
        <RowAlignCenter>
            <Col span={4}><Avatar>{name?.charAt(0)}</Avatar></Col>
            <Col span={11}>
                <div>{name}</div>
                <Typography.Text><StatusOnStyled></StatusOnStyled>Đang hoạt động</Typography.Text>
                </Col>
            <Col span={9}>
            <PhoneFilled className="icon"/>
            <VideoCameraFilled className="icon"/>
            <MinusCircleFilled className="icon"/>
            <CloseOutlined onClick={()=>{
             const newUserChattings  =userChattings.filter(userChatting =>userChatting.displayName!=name)
             setUserChattings(newUserChattings)
            }}  className="icon"/>
            </Col>
        </RowAlignCenter>
        <Divider/>
        <ChatView  ref={chatViewRef} className="chatview" >
            {isLoading&&<Spin/>||messages?.map(mess=>(<Message createdAt={mess.createdAt} key={mess.id}content={mess.mess} me={true}/>))}
        </ChatView>
        <FooterStyled>
        {!isOnInput&&<PlusCircleFilled className="icon"/>}
        {!isOnInput&&<FileImageFilled  className="icon"/>}
        {!isOnInput&&<FileGifOutlined  className="icon"/>}
        <InputNoneAnimation value ={mess} onPressEnter={()=>{
            if(mess=="") return 
            setIsOnInput(false)
            setMess("")
            setMessList([...messList,{content:mess,me:true}])
           addDocument('messages',{mess,selectedRoomName})
            chatViewRef.current.scrollTop=chatViewRef.current.scrollHeight;
        }} onChange={e=>{
            setIsOnInput(true)
            setMess(e.target.value)
            }}style={{width:isOnInput?"23vw":"13vw", borderRadius:"10px"}} 
            placeholder="Aa"
            prefix={<SmileOutlined className="icon"/>}/>
        </FooterStyled>
    </MessageChatStyled>
  )
}

export default MessageChat