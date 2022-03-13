import React from 'react'
import { Row , Col   , Typography , List , Menu , Affix} from 'antd'
import {UserOutlined,TeamOutlined,RightOutlined} from '@ant-design/icons';
import styled from 'styled-components'
const SideFriendsItem = ({icon , description}) => {
    const RowItemStyled = styled(Row)`
    padding:5px;
    display:flex;
    align-items:center;
    border-radius:10px;
        &:hover { 
            background-color:#f0f2f5;
            cursor:pointer
        }
    `
  return (
    <RowItemStyled align="center">
        <Col span={2}>
        <UserOutlined style={{fontSize:"21px"}} />
        </Col>
        <Col style={{textAlign:"left"}}span={20}>
        <Typography.Title level={5}>{description}</Typography.Title>
        </Col>
        <Col span={2}>
        <RightOutlined style={{fontSize:"21px"}} />
        </Col>
    </RowItemStyled>
  )
}

export default SideFriendsItem