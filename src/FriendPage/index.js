import React from 'react'
import { Row , Col  ,Input , Typography , List , Menu , Affix} from 'antd'
import styled from 'styled-components'
import  SideFriendsItem from '.././components/SideFriendsItem'
import  FriendsMain from '.././components/FriendsMain'
import {SettingFilled} from '@ant-design/icons';

const FriendPage = () => {
    const RowStyled = styled(Row)`
    background-color:#f0f2f5;
    &&&{
        .icon{
            padding:10px;
          background-color:#f0f2f5;   
          border-radius:50%;
        }
        .icon:hover{
          background-color:lightgrey;   
         cursor:pointer
        }
    }
    `
    const ColSidebarStyled = styled(Col)`
    background-color:white;
    padding :20px;
    height:100vh;
    `
  return (
    <RowStyled>
        <ColSidebarStyled span={8} >
               <Typography.Title level={3}>Bạn bè <SettingFilled className="icon" /></Typography.Title>
            <SideFriendsItem description="Trang chủ"/>
            <SideFriendsItem description="Lời mời kết bạn"/>
            <SideFriendsItem description="Gợi ý"/>
        </ColSidebarStyled>
        <Col span={16}>
        <FriendsMain/>
        </Col>
    </RowStyled>
  )
}

export default FriendPage