import React from 'react'
import ItemSidebar from './ItemSidebar'
import { Row , Col  ,Input , Typography , Space , Tooltip , Modal} from 'antd'
import {VideoCameraFilled , SearchOutlined,EllipsisOutlined}  from '@ant-design/icons';
import styled from 'styled-components'
import { useAuth } from '.././context/AuthProvider'
import useFirestore from '.././hooks/useFirestore'
import { AppContext } from '.././context/AppProvider';
const SideBarRight = () => {
  const { selectedRoomName , setSelectedRoomName, rooms,isInviteChat, setIsInviteChat ,setSelectedRoom} = React.useContext(AppContext)
    const SideBarStyled = styled.div`
    height:90vh;
    overflow-y:scroll;
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
    }
    `
    const ColAlignCenter = styled(Col)`
    display:flex;
    justify-content:space-between;
    align-items:center;`
  return (
    <SideBarStyled className="custom_scrollbar">
        <div>
            <Row>
                <ColAlignCenter  span={24}>
                    <Typography.Text style={{color:"gray", fontSize:"15px" , fontWeight:"600"}}>Người liên hệ</Typography.Text>
                  <Tooltip title="Phòng họp mặt mới">
                  <VideoCameraFilled className="icon" />
                      </Tooltip>  
                  <Tooltip title="Tìm kiếm theo tên hoặc nhóm">
                  <SearchOutlined  onClick={()=>setIsInviteChat(true)}  className="icon"/>
                      </Tooltip> 
                      <Tooltip title="Tùy chọn">
                    <EllipsisOutlined  className="icon"/>
                      </Tooltip>
                </ColAlignCenter>
            </Row>
        </div>
        {rooms?.map((room,index)=><ItemSidebar id = {room.id}name={room.name} key={room.id}/>)}
    </SideBarStyled>
  )
}

export default SideBarRight