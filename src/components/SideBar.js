import React from 'react'
import ItemSidebar from './ItemSidebar'
import styled from 'styled-components'
import { doc, onSnapshot } from "firebase/firestore";
const SideBar = () => {
    const SideBarStyled = styled.div`
    height:90vh;
    overflow-y:scroll;
    `
    console.log("renrender")
  return (
    <SideBarStyled className="custom_scrollbar">
        
    </SideBarStyled>
  )
}

export default React.memo(SideBar)