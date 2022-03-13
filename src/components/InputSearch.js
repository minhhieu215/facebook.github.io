import React, { useState } from 'react'
import styled from 'styled-components'
import { Row , Col  ,Avatar , Typography , Button , Menu , Affix} from 'antd'
import { RollbackOutlined , SearchOutlined } from '@ant-design/icons';

import { AppContext } from '.././context/AppProvider'
const InputUserStyled = styled.input`
border:solid 1px gray;
padding:5px;
width:100%;
&:focus{
    border:solid 1px black;
}
`
const ColAlignCenter = styled(Col)`
display:flex;
align-items:center;
justify-content:space-between
`
const InputSearchStyled = styled.div`
background-color:white;
padding:5px 20px;
border:solid 1px ;
width:300px;
border-radius:10px;
`
const RowAlignCenter = styled(Row)`
display:flex;
align-items:center;
padding:5px;
border-radius:10px;
&:hover{
    cursor:pointer;
    background:#f0f2f5
}
}
`
const InputSearch = () => {
    const { isInputSearch , setIsInputSearch} = React.useContext(AppContext)
    const mockData = [
        {
            name:"Khue Anh"
        },
        {
            name:"Minh Hieu"
        },
        {
            name:"Ngoc Bach"
        },
    ]
    const [valueSearch , setValueSearch ] = React.useState("")
    const inputRef = React.useRef()
    const handleClose =()=>{
        setIsInputSearch(false)
    }
  return (
      <Affix style={{position:"absolute", top:"0"}}>
          <InputSearchStyled onClick={(e)=>e.stopPropagation()}>
             <Row  style={{marginBottom:"10px"}} span={7}>
                 <Col span={4}>
                 <RollbackOutlined onClick={handleClose}/>
                 </Col>
                 <Col span={20}>
                     <InputUserStyled className="inputUser"  ref={inputRef}  value={valueSearch} onChange={e=>setValueSearch(e.target.value)} placeholder="Tìm kiếm trên Facebook" style={{borderRadius:"10px", backgroundColor:"#f0f2f5"}} ghost/>
                 </Col>
                 </Row>  
             
                 <Row align="center" >
                     <ColAlignCenter span={24} >
                     <Typography.Text style={{fontWeight:"bold"}}>Tìm kiếm gần đây</Typography.Text>
                     <Button type="text" style={{color:"#196dd7"}}>Chỉnh sửa</Button>
                     </ColAlignCenter>
                 </Row>
                 <div className="listName">
                    {mockData.map(user=>{
                        if(user.name.includes(valueSearch)){
                            return  <RowAlignCenter><Avatar style={{marginRight:"5px",marginBottom:"5px"}}>{user.name.charAt(0)}</Avatar>{user.name}</RowAlignCenter>
                        }
                    }
                    )}
                </div>
               </InputSearchStyled>
             
      </Affix>
  )
}

export default InputSearch