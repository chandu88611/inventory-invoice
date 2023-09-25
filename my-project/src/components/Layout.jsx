import React from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { LucideLayoutDashboard } from 'lucide-react'

function Layout({children}) {
  return (
    <div >

    <div className='flex'>
        <div className="max-width-[160px]">
        <Sidebar>
    <SidebarItem icon={<LucideLayoutDashboard/>} text={"Dashboard"} active={true}/>
   </Sidebar>
        </div>
        <div className='w-full'>
            
<div className='flex h-[60px] p-2 bg-white w-full shadow-lg'>
de
</div>
    <div className='h-[90vh] overflow-auto px-2 pt-4 pb-6'>
      {children}
        </div>
        </div>
    </div>
    </div>
  )
}

export default Layout