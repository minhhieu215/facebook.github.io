import React from 'react'
import { Row , Col ,Typography , Avatar} from 'antd'
const NotiItem = ({content, status}) => {
  return (
    <Row style={{marginTop:"10px"}}>
            <Col span={3}>
            <Avatar>A</Avatar>
            </Col>
            <Col span={21}>
            <Typography.Text>{content}</Typography.Text>
            </Col>
        </Row>
  )
}

export default NotiItem