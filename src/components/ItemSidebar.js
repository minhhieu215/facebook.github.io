import React from 'react'
import { Row , Col  ,Input , Typography , Avatar , Menu , Affix} from 'antd'
import styled from 'styled-components'
import {AppContext} from '.././context/AppProvider'
import {AuthContext} from '.././context/AuthProvider'
import { onSnapshot ,doc , query, where, orderBy, limit} from 'firebase/firestore'
import { db } from '.././firebase/config'
const ItemSidebar = ({avatar ,id, name} ) => {

    const { isVisibleMessChat, setSelectedRoomName,setSelectedRoom , setIsVisibleMessChat ,userChattings,setUserChattings} = React.useContext(AppContext)
    const ItemSidebarStyled = styled.div`
    padding:5px;
    cursor:pointer;
    margin-inline:5px;
    border-radius:10px;
    &:hover { 
        background:#c3c5c7;
    }
    `
    const AvatarStyled = styled(Avatar)`
    margin-right:8px;
    `
    return (
    <ItemSidebarStyled onClick={()=>{
        setSelectedRoom(id)
        setUserChattings([{displayName: name, me:true}])
        setSelectedRoomName(name)
    }
    }>
        <AvatarStyled className="avatar">{name?.charAt(0)}</AvatarStyled>
        <Typography.Text style={{  fontWeight:"500"}}>{name}</Typography.Text>
    </ItemSidebarStyled>
  )
  
}

export default ItemSidebar