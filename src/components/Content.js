import React from 'react'
import Status from './Status'
import { AppContext } from '../context/AppProvider'
const Content = () => {
  const { statuses } =React.useContext(AppContext)
  return (
    <div>
      {statuses.map(status=><Status content={status.content} user={status.user}/>)}
    </div>
  )
}

export default Content