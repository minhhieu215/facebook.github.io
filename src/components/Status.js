import React from 'react'
import { Row , Col  ,Button , Typography , Avatar , Divider , Affix} from 'antd'
import {MessageOutlined ,LikeFilled, LikeOutlined,EllipsisOutlined , ShareAltOutlined}  from '@ant-design/icons';
import Comments from './Comments'
import styled from 'styled-components' 
const Status = ({user , content, image}) => {
    const [isVisibleComment , setIsVisibleComment ] = React.useState(false)
    const [likedStatus, setLikedStatus] = React.useState(false)
    const StatusWrapper = styled.div`
    margin: 10px 0;
    background:white;
    padding:10px;
    border-radius:10px;
    `
    const ColAlignCenter = styled(Col)`
    display:flex;
    align-items:center;
    &&& { 
        .icon{ 
           color:gray;
           cursor:pointer;
           padding:5px;
           border-radius:50%;
        }
        .icon:hover { 
            background-color:#c3c5c7;
        }
   }`
    const TextUnderLined = styled(Typography.Text)`
        &:hover{
            cursor:pointer;
            border-bottom:solid 1px black;
        }
    `
    const WrapperImage= styled.div`
    overflow:hidden;
    &&&{
        img{
            object-fit: cover;
            width: 100%;
            object-position: center;
            }
    }
    `
    const ColJustifyCenter = styled(ColAlignCenter)`
        justify-content:center;
    `
    const ButtonStyled = styled(Button)`
   &:hover { 
        cursor:pointer;
        background-color:#c3c5c7;
        width:100%;
   }
    `
    const handleComment = ()=>{ 
        setIsVisibleComment(!isVisibleComment)
    }
  return (
    <StatusWrapper>
        <Row>
            <ColAlignCenter span={2}>
            <Avatar>{user.charAt(0)}</Avatar>
            </ColAlignCenter>
            <ColAlignCenter span={21}>
               <Row>
                <Col span={24}><TextUnderLined style={{fontWeight:"600"}}>{user}</TextUnderLined></Col>
                <Typography.Text style={{color:"grey"}}>18 tháng 2 lúc 19:21</Typography.Text>
               </Row>
            </ColAlignCenter>
            <ColAlignCenter span={1}>
                <EllipsisOutlined className="icon" style={{fontSize:"20px"}}/>
            </ColAlignCenter>
        </Row>
        <Row>
            <Col span={24}>
                <Typography.Text>{content}</Typography.Text>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <WrapperImage>
                    <img src={require(".././images/274183805_451411889997887_1451058573274440552_n.jpg")}/>
                </WrapperImage>
            </Col>
        </Row>
        <Divider/>
        <Row style={{paddingInline:"10px"}}>
            <ColJustifyCenter span={8}>
                <ButtonStyled onClick={()=>setLikedStatus(!likedStatus)} style={{textAlign:"center"}}type="text" icon={likedStatus?<LikeFilled />:<LikeOutlined/>}>
                    Thích
                </ButtonStyled>
            </ColJustifyCenter>
            <ColJustifyCenter span={8}>
                <ButtonStyled onClick={handleComment}style={{textAlign:"center"}} icon ={<MessageOutlined />} type="text">
                    Bình luận
                </ButtonStyled>
            </ColJustifyCenter>
            <ColJustifyCenter span={8} >
                <ButtonStyled style={{textAlign:"center"}} icon={<ShareAltOutlined />}type="text">
                    Chia sẻ
                </ButtonStyled>
            </ColJustifyCenter>
        </Row>
        <Divider/>
       {isVisibleComment&&<Comments/>}
    </StatusWrapper>
  )
}

export default Status