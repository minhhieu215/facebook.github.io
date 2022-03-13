import React from 'react'
import { useAuth } from './AuthProvider'
import useFirestore  from '.././hooks/useFirestore'
export const AppContext = React.createContext()
 const AppProvider = ({children}) => {
   const [ selectedRoom , setSelectedRoom ] =React.useState()
   const [ selectedRoomName , setSelectedRoomName ] =React.useState("Ngoc Bach")
  const [ isInputSearch , setIsInputSearch ]= React.useState(false)
  const [ isNotiVisible , setIsNotiVisible]= React.useState()
  const [ isVisibleMessChat , setIsVisibleMessChat] =React.useState(false)
  const [ userChattings , setUserChattings ] =React.useState([])
  const [ statusFilterNoti , setStatusFilterNoti] =React.useState()
  const [ isInviteChat, setIsInviteChat] = React.useState()

  const mockStatuses = [
    {
      content:"Người bạn thích thời THPT có lẽ là người bạn yêu nhất .Bởi đoạn tình cảm này không có sự ngô nghê của hồi tiểu học. Không có sự mông lung của học sinh THCS, cũng chẳng có sự lợi dụng như lúc đại học và không có sự thực dụng khi bước chân vào xã hội.Nó chính là tình cảm chân thành nhất mà chúng ta giành cho nhau.",
      user:"Ngiu tui cực kì cutee",
    },
    {
      content:"Người bạn thích thời THPT có lẽ là người bạn yêu nhất .Bởi đoạn tình cảm này không có sự ngô nghê của hồi tiểu học. Không có sự mông lung của học sinh THCS, cũng chẳng có sự lợi dụng như lúc đại học và không có sự thực dụng khi bước chân vào xã hội.Nó chính là tình cảm chân thành nhất mà chúng ta giành cho nhau.",
      user:"Ngiu tui cực kì cutee",
    },
  ]
  const mockNotifications= [
    {
      content:"Hello",
      status:"all",
      timeline:"new"
    },
    {
      content:"Hello Minh Hieu" ,
      status:"unseen",
      timeline:"old"
    },
    {
      content:"Hello Khue Anh",
      status:"all",
      timeline:"new"
    }
  ]
  const [NotificationList  , setNotificationList ]=React.useState(mockNotifications)
  const [ notiNum, setNotiNum ]= React.useState(NotificationList.length)

  const [ statuses, setStatuses ] = React.useState(mockStatuses)
  const { currentUser } = useAuth()
  const roomCondition = React.useMemo(()=>({
    fieldName:'members',
    operator:'array-contains',
    compareValue: `${currentUser?.uid}`
  }),[currentUser?.uid])
  const messCondition = React.useMemo(()=>({
    fieldName:"selectedRoomName",
    operator:"==",
    compareValue: selectedRoomName
  }),[selectedRoomName])
  const rooms = useFirestore('rooms',roomCondition)
  const messages = useFirestore('messages',messCondition)
  console.log(messages)
  return (
    <AppContext.Provider value={{messages, selectedRoomName , setSelectedRoomName, selectedRoom , setSelectedRoom ,rooms,isInviteChat, setIsInviteChat ,notiNum, setNotiNum ,NotificationList,setNotificationList,statusFilterNoti , setStatusFilterNoti,  isNotiVisible , setIsNotiVisible, userChattings , statuses, setStatuses , setUserChattings, isInputSearch , setIsInputSearch,  isVisibleMessChat , setIsVisibleMessChat }}>
      {children}
      </AppContext.Provider>
  )
}

export default AppProvider