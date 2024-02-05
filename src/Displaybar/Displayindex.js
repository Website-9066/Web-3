import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faPlus, faRectangleList } from '@fortawesome/free-solid-svg-icons'
import facebook from '../assets/img/facebook.png'
import down from '../assets/img/down.png'
import up from '../assets/img/up.png'
import Ellipse from '../assets/img/Ellipse 5.png'
import Insta from '../assets/img/Instalogo.png'
import facebook5 from '../assets/img/logos_facebook.png'
import Displaytodo from './Displaytodo'

const Displayindex = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const contentArray  = [
    { text: 'Audience', text1: 'Lifetime', text2: 'Facebook page followers', text3: '', text4: '5.9k', img: facebook},
    { text: 'Trends', text1: 'Last 28 days', text2: 'Replying to followers', text3: '35%', text4: '356k', img: facebook, img2: down, textcolour: '#FF0000' },
    { text: 'Audience', text1: 'Lifetime', text2: 'Facebook page followers', text3: '35%', text4: '20.9k%', img: facebook, img2: up, textcolour: '#18a900' },
  ];

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1));
  };
  const currentContent = contentArray[currentIndex];
  return (
    <>
    <div className='mx-auto my-10' >
<h1 className='mt-10 md:ml-[83px] ml-[20px] font-bold text-[26px] mb-20'>Home</h1>

  <div className='absolute mt-[-40px] ' style={{zIndex:'1'}}>
    
  <div className='bg-[#ffffff] ml-[100px] h-[100px] w-[100px] rounded-[50px] shadow-md shadow-black-500'>
 
  </div>
  
  <div className='bg-[#ffffff] ml-[110px] h-[80px] w-[80px] rounded-[50px] mt-[-90px]'>
  <img src={Ellipse} alt="" />
  <img src={facebook5} alt="" className='w-[40px] mt-[-41px] ml-[44px]' />
    </div>
  
</div>
<div className='absolute mt-[-40px] '>
  <div className='bg-[#ffffff] ml-[150px] h-[100px] w-[100px] rounded-[50px] shadow-md shadow-black-500'>
  
  </div>
  <div className='bg-[#ffffff] ml-[160px] h-[80px] w-[80px] rounded-[50px] mt-[-90px] '>
    <img src={Ellipse} alt="" />
    <img src={Insta} alt="" className=' w-[40px] mt-[-37px] mx-[53px]'/>
    </div>
    
</div>

<div className='block md:flex '>
<div className='bg-[#fff] md:ml-[83px] ml-[0px] md:h-[215px] h-[309px]  md:w-[655px] w-[329px] rounded-[10px] md:pl-[20px] pl-[11px]  pt-[108px]'>
<h1 className='text-[26px] font-medium '>Saathi Gaming</h1>
<h1 className='text-[18px] font-medium text-[#1877F2] mb-1'>Manage Facebook page | Go to instagram</h1>
<div className='md:flex'>
  <div className='bg-[#1877F2] md:w-[350px] w-[309px] text-white rounded-[5px]'>
    <button className='flex ml-[35%] items-center'>
   <FontAwesomeIcon icon={faRectangleList } />
    <h1 className='text-center font-medium ml-[10px] text-[18px]'>Create Post</h1>
  </button>
  </div>
  <div className='bg-[#F7F7F7] font-medium ml-1  md:mt-0 mt-1 text-[18px] md:w-[161px] w-[309px] text-[#333333] rounded-[5px] md:pl-[20px] pl-[0px] pr-[20px] '> <FontAwesomeIcon icon={faPlus } className='mr-1'/>Create Story</div>
  <div className="relative inline-block text-left">
      <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        <div className="bg-[#F7F7F7] flex mt-1 items-center font-medium ml-1 text-[18px]  text-[#333333] rounded-[5px] md:pl-[20px] pl-[0px] pr-[20px] ">
          More
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
      <div style={{zIndex:'1'}}
        className={`absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg ${
          isDropdownVisible ? 'block' : 'hidden'
        }`}
      >
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          Action
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          Another
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          Something
        </a>
      </div>
    </div>
</div>
  </div>
  <div className='bg-[#fff] ml-[9px] md:w-[227px] md:mt-[0px] mt-[80px] mt-[20px] w-[auto]  rounded-[10px]'>
      <div className='p-3'>
        <div className='font-medium text-[25px] text-[#333333]'>{currentContent.text}</div>
        <div className='font-medium text-[21px] text-[#333333]'>{currentContent.text1}</div>
        <div className='font-medium text-[18px] text-[#333333]'>{currentContent.text2}</div>
        <div className='flex w-[14%]'>
          <img src={facebook} alt="facebook" />
          <div className='text-[18px] text-[#333333] font-medium'>{currentContent.text4}</div>
          <div className='flex w-[100%] ml-5'>
            <div className={` font-medium text-[18px] text-[${currentContent.textcolour}]`}>{currentContent.text3}</div>
            <img className='h-5' src={currentContent.img2}  />
          </div>
        </div>
      </div>

      <div className='flex justify-end my-3 mx-6'>
        <FontAwesomeIcon icon={faChevronLeft} className='text-[25px] mr-[10px]' onClick={handleLeftArrowClick} />
        <FontAwesomeIcon icon={faChevronRight} className='text-[25px]' onClick={handleRightArrowClick} />
      </div>
    </div>
  <div> 
  </div>
</div>

<div>
  <div className='md:ml-[84px] ml-[0px] m-auto md:w-[100%] w-[309px] mt-5 '>
    <h1 className='font-bold text-[26px] '>To do list</h1>
    <h1 className='text-[16px]'>Check unread messages, comments and other things that may require your attention.</h1>
  </div>
</div>

<Displaytodo/>
    </div>
    </>
  )
}

export default Displayindex