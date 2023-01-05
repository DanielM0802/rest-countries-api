import { Outlet } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'


function Layout() {

    const changeTheme = () => document.documentElement.classList.toggle('dark')

  return (
    <>
    <div className="shadow-lg bg-white">
        <header className='flex justify-between container mx-auto lg:px-20 py-6'>
            <h1 className="text-xl font-extrabold">Where in the world?</h1>
            <div 
                className="flex justify-between items-center" 
                onClick={changeTheme}
            >
                <FontAwesomeIcon icon={faMoon} className="text-base"/>
                <p className="text-base font-semibold">Dark Mode</p>       
            </div>
        </header>
    </div>
        <Outlet/>
    </>
  )
}

export default Layout