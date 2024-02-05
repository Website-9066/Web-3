import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA,  faBars, faBell, faChartSimple, faCog, faHouse, faInbox,  faQuestionCircle, faSignsPost, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import metalogo from '../assets/img/metalogo.png'
import Ellipse from '../assets/img/Ellipse 5.png'
import Ellipse1 from '../assets/img/Ellipse 1.png'
import { Link } from 'react-router-dom';

const Menubar = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const contentArray = [
    { name: 'Home', faHouse: faHouse, link: '/' },
    { name: 'Notification', faHouse: faBell, link: '/noti' },
    { name: 'Inbox', faHouse: faInbox, link: '/' },
    { name: 'Posts and stories', faHouse: faSignsPost, link: '/' },
    { name: 'Ads', faHouse: faA, link: '/' },
    { name: 'Insights', faHouse: faChartSimple, link: '/' },
    { name: 'All tools', faHouse: faBars, link: '/' },
  ];

  return (
    <>
    <div class="bg-[#fff] shadow-lg text-[20px]">
    <div className='p-2 h-screen'>

    <div>
    <img src={metalogo} alt="metalogo" />
    </div>

    <div className="relative inline-block text-left ">
      <div className="flex items-center cursor-pointer  " onClick={toggleDropdown}>
      
        <div className="bg-[#F7F7F7] flex justify-between w-[18.3rem] h-[46px]  items-center font-medium ml-1 text-[18px] text-[#333333] rounded-[5px] pl-[20px] pr-[20px]">
        <div>
          <img src={Ellipse} alt="" className="w-[40px]"/>
        </div>
        Saathi Gaming
          <svg
  className={`ml-2 transition-transform transform bg-[#F7F7F7] ${isDropdownVisible ? 'rotate-180' : ''}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  fill="currentColor"
  width="20"
  height="20"
>
  <path
    fillRule="evenodd"
    d="M239 111c9.4-9.4 24.6-9.4 33.9 0L465 303c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-175-175L81 337c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 111z"
    clipRule="evenodd"
  />
</svg>
        </div>
     
      </div>
      <div
        ref={dropdownRef}
        className={`absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg ${
          isDropdownVisible ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-[#000] flex justify-around w-[18.3rem] h-[46px] items-center font-medium text-[18px] text-[#fff] rounded-[5px] pl-[20px] pr-[20px]">
          <div>
            <img src={Ellipse1} alt="" className="w-[40px]" />
          </div>
          Saathi Gaming
        </div>
      </div>
    </div>
    <div className='h-[360px]'>
      {contentArray.map((item, index) => (
        <Link to={item.link} key={index} className='text-black hover:text-white'>
          <div className='flex bg-[#fff] hover:bg-[#000] w-[18.3rem] h-[46px] p-[10px] items-center rounded-md mt-1.5 mb-1.5'>
            <div>
              <FontAwesomeIcon icon={item.faHouse} className='hover:text-white' />
            </div>
            <div className="font-poppins text-[20px] pl-3">
              {item.name}
            </div>
          </div>
        </Link>
      ))}
      <hr className='border' />
      <Link to="/edit" className="font-poppins text-[20px] pl-3 text-black hover:text-white">
        Edit
      </Link>
    </div>
    </div>

    <div className="bottom-0 text-[20px] ml-2">
    <div className='flex bg-[#fff] hover:bg-[#000] w-[18.3rem] h-[46px] p-[10px] items-center rounded-md mt-1.5 mb-1.5 text-black hover:text-white'>
      <div>
      <FontAwesomeIcon icon={faCog}  className='hover:text-white'/>
      </div>
        <div className="font-poppins text-[20px] pl-3">
            Settings
        </div>
        <div className='ml-[130px]'>
      <FontAwesomeIcon icon={faSquareArrowUpRight}  className='hover:text-white '/>
      </div>
    </div><div className='flex bg-[#fff] hover:bg-[#000] w-[18.3rem] h-[46px]  p-[10px] items-center rounded-md mt-1.5 mb-1.5  text-black hover:text-white'>
      <div>
      <FontAwesomeIcon icon={faQuestionCircle}  className='hover:text-white'/>
      </div>
        <div className="font-poppins text-[20px] pl-3">
            Help
        </div>  
    </div>
    </div>
    </div>
        </>
  )
}

export default Menubar