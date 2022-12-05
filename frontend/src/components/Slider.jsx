import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';

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
            <div className='slide flex items-center h-full w-screen'>
                <div className='img-container flex-1 h-full ml-20 '>
                    <img className="h-[80vh]" src='https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80' alt="falljacket"></img>
                </div>
            <div className='info-container flex-1 p-50'>
                <h1 className='text-7xl'>FALL SALE</h1>
                <p className='text-lg mt-10 mb-10 font-medium tracking-wide'>GET FALL READY WITH STYLE! GET 30% OFF ALL FALL JACKETS</p>
                <button className='p-5 text-xl bg-transparent border-2'>Shop now</button>
                </div>
            </div>
            <div className='slide flex items-center h-full w-screen'>
                <div className='img-container flex-1 h-full ml-20'>
                    <img className="h-[80vh]" src='https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80' alt="falljacket"></img>
                </div>
            <div className='info-container flex-1 p-50'>
                <h1 className='text-7xl'>POPULAR SALE</h1>
                <p className='text-lg mt-10 mb-10 font-medium tracking-wide'>GET FALL READY WITH STYLE! GET 30% OFF ALL FALL JACKETS</p>
                <button className='p-5 text-xl bg-transparent border-2'>Shop now</button>
                </div>
            </div>
        </div>
        <div className='arrow-right-container w-50 h-10 bg-slate-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-10 cursor-pointer opacity-50' onClick={()=>handleClick("right")}>
            <ArrowRightIcon/>
        </div>
    </div>
  )
}

export default Slider;