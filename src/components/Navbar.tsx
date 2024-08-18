import React from 'react'
import MobileSidebar from './MobileSidebar'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar />
    </div>
  )
}

export default Navbar