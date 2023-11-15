import React from 'react'
// import { useRouteError } from 'react-router-dom'
import '../App.css'

const Error = () => {
  //  const err = useRouteError()
  return (
    <div className='err_div'>
        <img className='err_img' src='https://i.pinimg.com/originals/c5/7f/5a/c57f5af94487bb62711c5adf7926feb2.gif'/>
        <h1>Oops!</h1>
        <h3>Spmething went wrong☹️</h3>
        {/* <h4 style={{color:"red"}}>{err.status}: {err.statusText}</h4> */}
    </div>
  )
}

export default Error