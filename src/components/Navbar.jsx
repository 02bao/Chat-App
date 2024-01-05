import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user"> 
        <img src="https://i.pinimg.com/236x/e1/6c/70/e16c704fc0b655e553dd7a1a8a00475d.jpg" alt="" /> 
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar