import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex items-center w-[100%] font-bold justify-between p-2'>
      <img src="./htm.png" className='h-[3rem] ml-[3rem] w-[6rem]' alt="" />
      <div className="navitems flex items-center justify-around w-[40%] text-[1.2rem]">
        <p className='nav_item'>Home</p>
        <p className='nav_item'>Explore</p>
        <button className='bg-[purple] text-white h-[2.4rem] w-[6rem] rounded-md hover:bg-[white] hover:text-[purple]'>Apply</button>
      </div>
    </div>
  )
}

export default Navbar
