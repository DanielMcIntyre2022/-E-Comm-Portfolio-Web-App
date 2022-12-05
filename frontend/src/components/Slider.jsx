import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { sliderItems } from '../data';

function Slider() {
    
    const [slideIndex, setSlideIndex ] = useState(0);
    const handleClick = (direction) => {

    };

  return (
    <div className="slider-container w-100% h-screen flex relative mt-10 bg-white overflow-hidden">
        <div className="arrow-left-container w-50 h-10 bg-slate-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-10 cursor-pointer opacity-50 z-index:2" onClick={()=>handleClick("left")}>
            <ArrowLeftIcon/>
        </div>
        <div className='slider-wrapper h-full flex bg-slate-50 tw-translate-x: 0'>
            {sliderItems.map(item=> (
                  <div className='slide flex items-center w-screen'>
                  <div className='img-container flex-1 h-full ml-20'>
                      <img className="h-[80vh]" src={item.img} alt="falljacket"></img>
                  </div>
              <div className='info-container flex-1 p-50'>
                  <h1 className='text-7xl'>{item.title}</h1>
                  <p className='text-lg mt-10 mb-10 font-medium tracking-wide'>{item.description}</p>
                  <button className='p-5 text-xl bg-transparent border-4'>Shop now</button>
                  </div>
              </div>
            ))}
        </div>
        <div className='arrow-right-container w-50 h-10 bg-slate-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-10 cursor-pointer opacity-50' onClick={()=>handleClick("right")}>
            <ArrowRightIcon/>
        </div>
    </div>
  )
}

export default Slider;