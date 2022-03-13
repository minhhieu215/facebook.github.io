import React from 'react'
import { Row , Col  ,Input , Typography , List , Menu , Affix} from 'antd'
import styled from 'styled-components'
const FriendsMain = () => {
    const FriendsMainStyled = styled.div`
    display:flex;
    flex-direction:column;
    color:gray;
    align-items:center;
    justify-content:center;
    height:100vh;
    `
  return (
    <FriendsMainStyled>
          <img src={require(".././images/nofriends.png")}/>
          <Typography.Title level={3}>
          Lời mời và gợi ý kết bạn sẽ hiển thị tại đây.
          </Typography.Title>
    </FriendsMainStyled>
  )
}

export default FriendsMain