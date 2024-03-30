import React from 'react'

function NavBar({data}) {
  return (
    <div className='h-12 w-full z-[9] bg-teal-50 fixed text-xl -mt-24 bg-transparent text-white flex items-center justify-between px-8 py-12'>
        <h1 className='bg-[#1e1e21] shadow-lg shadow-[#b1b7b5] rounded-full py-[14px] px-[21px] flex items-center gap-1'>Enjoy Music <i className="ri-music-2-line text-2xl font-normal"></i></h1>
        <h1 className='bg-[#1e1e21] shadow-lg shadow-[#b1b7b5] rounded-full py-[15px] px-[26px] flex items-center gap-1 whitespace-nowrap '>Your Favourites
        <span className='bg-[#2e2e33] text-sm px-[9px] py-1 rounded-full'>
          {data.filter(items => items.added).length}
        </span>
        </h1>
    </div>
  )
}

export default NavBar
