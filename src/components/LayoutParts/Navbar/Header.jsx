import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Navbar/NavImg/logo.png'
import Logo1 from '../Navbar/NavImg/Preview.png'


const Nav = () => {
  return (
    <>
      <header>
        <div className="bg-[#FF6D2E] w-full h-20 flex flex-col sm:w-full  justify-center items-center px-2 sm:h-10 sm:flex-row sm:justify-between sm:items-center sm:p-4">
          <h1 className="text-blue-950 font-normal   justify-center lg:text-center   ">
            Book a private jet with Charter JetOne to avoid any last minute changes.{' '}
            <u className=" text-blue-950 font-bold cursor-pointer">See our plans.</u>
          </h1>
        </div>
        <div className="bg-[#000] flex w-full  lg:h-24 h-40    items-center space-x-4 ">
          <Link to="/">
            <img src={Logo1} alt="Logo" className=" w-auto h-auto cursor-pointer lg:ml-16 sm:ml-8  py-4 px-4  " />
          </Link>
          <ul className=" p-8 justify-center space-x-12 lg:flex  hidden   lg:ml-8  ">
            <li className="flex items-center space-x-1">
              <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1722857263/ChartedjetContact/1722857263289-directCallWhite.png.png" alt="Direct" className="cursor-pointer w-[40px] h-[40px] " />
              <div>
                <h1 className=" text-xs text-[#faa01b]">
                  CALL US
                  <br />
                  <span className="text-[#E8E4E4] text-sm">+(91) 212-279-1095</span>
                </h1>
              </div>
            </li>
            <li className="flex items-center space-x-1">
              <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1722857312/ChartedjetContact/1722857312515-tollFreeWhite.png.png" alt="Toll" className="cursor-pointer w-[40px] h-[40px] " />
              <div>
                <h1 className=" text-xs text-[#faa01b]">
                  CLUB MEMBERS
                  <br />
                  <span className="text-[#E8E4E4] text-sm">+(91) 844-251-0555</span>
                </h1>
              </div>
            </li>
            <li className="flex items-center space-x-1">
              <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1722857355/ChartedjetContact/1722857355268-chatWhite.png.png" alt="Text" className="cursor-pointer  w-[40px] h-[40px] " />
              <div>
                <h1 className=" text-xs text-[#faa01b]">
                  MESSAGE US
                  <br />
                  <span className="text-[#E8E4E4] text-sm">+91 212-279-1095</span>
                </h1>
              </div>
            </li>
            <li className="flex items-center space-x-1">
              <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1722857393/ChartedjetContact/1722857392990-emailWhite.png.png" alt="Email" className="cursor-pointer  w-[40px] h-[40px]  " />
              <div>
                <h1 className=" text-xs text-[#faa01b]">
                  EMAIL US
                  <br />
                  <span className="text-[#E8E4E4] text-sm">INFO@SkyCharter.COM</span>
                </h1>
              </div>
            </li>
          </ul>
          <div className='   w-1/4 h-[15px] mr-4 top-0 z-0  mb-3  sm:hidden block border-box'>
            <Link to="/Form">
              <img src="https://charterjetone.com/wp-content/uploads/2018/02/book-btn-mobile.png" alt="Booking Image " className="cursor-pointer " />
            </Link>
          </div>
        </div>
      </header>

    </>
  )
}

export default Nav
