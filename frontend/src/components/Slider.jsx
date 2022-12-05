import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Slider() {
  return (
    <div className="slider-container w-100% h-screen flex bg-yellow-200 relative mt-6">
        <div className="arrow-left-container w-50 h-10 bg-slate-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-10 cursor-pointer opacity-50">
            <ArrowLeftIcon/>
        </div>
        <div className='arrow-right-container w-50 h-10 bg-slate-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-10 cursor-pointer opacity-50'>
            <ArrowRightIcon/>
        </div>
    </div>
  )
}

export default Slider;