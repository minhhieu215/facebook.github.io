import React from 'react'
import { Row , Col  ,Input , Typography , Form , Tooltip , Modal} from 'antd'
import { AppContext } from '.././context/AppProvider'
import { AuthContext } from '.././context/AuthProvider'
import {addDocument} from '.././firebase/service'
const ModalInvite = () => {
  const { currentUser} =React.useContext(AuthContext)
    const {  isInviteChat, setIsInviteChat } = React.useContext(AppContext)
    const [ form ] = Form.useForm()
    const handleOk = ( )=>{
      console.log({formData: form.getFieldValue()})
        setIsInviteChat(false)
        addDocument('rooms',{...form.getFieldValue(),members:[currentUser?.uid]})
        form.resetFields()
    }
    const handleCancel = ( )=>{
        setIsInviteChat(false)
        form.resetFields()

    }
  return (
    <Modal visible={isInviteChat} onOk={()=>handleOk()} onCancel={()=>handleCancel()} title="Mời bạn vào chat">
      <Form form={form}>
        <Form.Item label="Tên muốn tìm kiếm" name="name">
          <Input placeholder="Nhập tên phòng"/>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalInvite