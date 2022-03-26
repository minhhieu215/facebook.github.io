import './App.css';
import styled from 'styled-components'
import React from 'react'
import Login from './Login/index.js'
import SignUp from './SignUp/index.js'
import MainPage from './MainPage/index.js'
import FriendPage from './FriendPage/index.js'
import HeaderMainPage from './components/HeaderMainPage'
import ResetPassword from './components/ResetPassword'
// import {PlayCircleOutlined} from '@ant-design/icons'
import { HashRouter , Routes , Route , useNavigate} from 'react-router-dom'
import AppProvider from './context/AppProvider';
import AuthProvider from './context/AuthProvider';
import Notimodal from './components/Notimodal'
import ModalInvite from './components/ModalInvite'


function App() {


  return (
    
      <HashRouter>
      
      <AuthProvider>
      <AppProvider>
          <div className="App">
              <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/homepage" element={<><HeaderMainPage/><MainPage/></>}/>
          <Route path="/friendpage" element={<><HeaderMainPage/><FriendPage/></>}/>
              </Routes>
        <Notimodal/>
        <ModalInvite/>
        </div> 
        </AppProvider>
      </AuthProvider>
     
   
      </HashRouter>
  );
}

export default App;
