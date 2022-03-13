import React from 'react'
import { Row , Col  ,Input , Modal , Avatar , Button ,Divider ,Typography,TreeSelect} from 'antd'
import styled from 'styled-components'
import {VideoCameraFilled,FileImageFilled,SmileFilled,LockFilled}  from '@ant-design/icons';
import { AppContext } from '../context/AppProvider'

const PostStyled =styled.div`
background-color:white;
border-solid : solid 1px grey;
border-radius:10px;
padding:10px;

&&&{
    .icon{
        font-size:20px;
        margin-right:10px;
    }
    .text{
        color:grey;
        font-weight:bold;
    }
}
`
const InputAreaStyled = styled(Input.TextArea)`
    margin-top:10px;
    padding: 10px 50px 100px 10px;
`
const PostStatus = ({user="Minh Hieu"}) => {
    const { statuses , setStatuses, NotificationList,setNotificationList,setNotiNum,notiNum } = React.useContext(AppContext)
    const [ isModal, setIsModal ] =React.useState(false)
    const [ contentPost , setContentPost ] =React.useState()
    const handleOk=()=>{    
        setIsModal(false)
        setContentPost("")
        setNotificationList(prev=>[...prev,{content:contentPost, status:"all",timeline:"new"}])
        setNotiNum(notiNum+1)
        setStatuses([{content:contentPost,user},...statuses])
    }
    const handleCancel=()=>{
        setIsModal(false)
    }
    const {TreeNode} = TreeSelect
  return (
    <PostStyled>
        <Row>
            <Col span={2}>
                <Avatar style={{transform:"scale(1.2)"}}>{user.charAt(0)}</Avatar>
            </Col>
            <Col span={22}>
                <Button onClick={()=>setIsModal(true)} type="text" style={{borderRadius:"10px",color:"grey"}}>{user} ơi bạn đang nghĩ cái đẽo gì vậy ?</Button>
            </Col>
        </Row>
        <Divider/>
        <Row>
        <Col span={8}><VideoCameraFilled style={{color:"#f3425f"}} className="icon" /><span className="text">Video trực tiếp</span></Col>
        <Col span={8}><FileImageFilled style={{color:"#45bd62"}} className="icon"/><span className="text" > Ảnh / Video</span></Col>
        <Col span={8}><SmileFilled  style={{color:"#f7b928"}}className="icon" /><span className="text">Cảm xúc / hoạt động</span></Col>
        </Row>
        <Modal title="Tạo bài viết" visible={isModal} onOk={handleOk} onCancel={handleCancel}>
        <Row>
            <Col span={2}>
                <Avatar style={{transform:"scale(1.2)"}}>{user.charAt(0)}</Avatar>
            </Col>
            <Col span={22}>
                <Typography.Text style={{fontWeight:"bold"}}>{user}</Typography.Text>
                <TreeSelect treeIcon={<LockFilled />} style={{display:"block", width:"150px"}} placeholder="Chỉ mình tôi">
                    <TreeNode title="Công khai" value="Công khai"></TreeNode>
                    <TreeNode title="Bạn bè" value="Bạn bè"></TreeNode>
                </TreeSelect>
                <InputAreaStyled value={contentPost}  onChange={(e)=>setContentPost(e.target.value)} placeholder={`${user} ơi bạn đang nghĩ gì ?`}type="text"></InputAreaStyled>
            </Col>
        </Row>
        </Modal>
    </PostStyled>
  )
}

export default PostStatus