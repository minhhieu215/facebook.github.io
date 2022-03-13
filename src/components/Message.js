import React from 'react'
import { Row , Col  ,Input , Typography , Avatar , Tooltip , Divider} from 'antd'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import styled from 'styled-components'
function formatDate(seconds) {
  let formattedDate = '';

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}
const Message = ({content,me, createdAt}) => {
  console.log(createdAt)
    const MessageStyled= styled.div`
    width:fit-content;
    padding:5px;
    border-radius:10px;
    background:#cccccc;
    border-radius-left-bottom:none;
    color:black;
    margin-right:10px;
    margin-bottom:10px;
    max-width:15vw;
    word-break: break-all;
    display:block;
    `
    const MyMessageStyled =styled(MessageStyled)`
    float:right;
    background:linear-gradient(#0054f3,#005ef5);
    color:white;
    `

    return  me&&
    <Row>
        <Col span={12}/>
        <Col span={12}>
          <Tooltip title={formatDate(createdAt?.seconds)}>
       <MyMessageStyled>{content}</MyMessageStyled>
          </Tooltip>
        </Col>
        </Row>
     || <Row>
       <Col span={12}>
       <MessageStyled>{content}</MessageStyled>
        </Col>
        <Col span={12}></Col>
        </Row>

}

export default Message