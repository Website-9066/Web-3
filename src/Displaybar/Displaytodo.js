import React from 'react'
import messabger from '../assets/img/feMessanger2.png'
import Ellipse from '../assets/img/Ellipse 5.png'

const Displaytodo = () => {

  const contentArray = [
    { t1: 'Saathi rathod', t2:'Hello how are you? i am saathi here nice to m..', t3:'1d', img1: messabger, img2:Ellipse },
    { t1: 'Saathi rathod', t2:'Hello how are you? i am saathi here nice to m..', t3:'1d', img1: messabger, img2:Ellipse },
    { t1: 'Saathi rathod', t2:'Hello how are you? i am saathi here nice to m..', t3:'1d', img1: messabger, img2:Ellipse },
    { t1: 'Saathi rathod', t2:'Hello how are you? i am saathi here nice to m..', t3:'1d', img1: messabger, img2:Ellipse },
    { t1: 'Saathi rathod', t2:'Hello how are you? i am saathi here nice to m..', t3:'1d', img1: messabger, img2:Ellipse },
    { t1: 'Saathi rathod', t2:'Hello how are you? i am saathi here nice to m..', t3:'1d', img1: messabger, img2:Ellipse },
  ];

  return (
    <div>
     <div
    class="ml-[0px] md:ml-[-20px] relative  bg-white ring-1 ring-gray-900/5 sm:rounded-lg ">
    <div class="mx-auto ">
        <div class="mx-auto mt-8 grid divide-y divide-neutral-200">
            <div class="p-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className='font-bold text-[22px]'>Messages</span>
                        <div className='flex'>
                        <h1 className='text-[20px]'>See All</h1>
                        <span class="transition group-open:rotate-180 ">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                            </div>
                    </summary>
                    <div className='md:w-[100%] w-[270px]'>
      {contentArray.map((content, index) => (
      <div key={index} className='flex flex-col md:flex-row justify-between items-center mt-5'>
      <div className='w-4 h-4 bg-[#006FFF] rounded-full mb-3 md:mb-0'></div>
      <div className="w-[35px] mb-3 md:mb-0">
        <img src={content.img1} alt="messabger" className=" h-auto" />
      </div>
      <div className="w-[35px] mb-3 md:mb-0">
        <img src={content.img2} alt="Ellipse" className=" h-auto" />
      </div>
      <div className="mb-3 md:mb-0">
        <p className='text-[20px] font-normal text-center md:text-left'>{content.t1}</p>
      </div>
      <div className="mb-3 md:mb-0">
        <p className='text-[20px] font-normal text-center md:text-left'>{content.t2}</p>
      </div>
      <div>
        <p className='text-[20px] font-normal text-[#606060] text-center md:text-left'>{content.t3}</p>
      </div>
    </div>
    
      ))}
    </div>
                </details>
                <hr className='mt-5 mb-5'/>
            <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className='font-bold text-[22px]'> Comment</span>
                        <div className='flex'>
                        <span class="transition group-open:rotate-180 ">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                            </div>
                    </summary>
                   
          </details>
      </div>       
              
        </div>
    </div>
</div>
    </div>
  )
}

export default Displaytodo
