import VisibilityIcon from '@mui/icons-material/Visibility';

function SmallWidget() {
  return (
    <div className="small-widget shadow-xl p-20 mr-20">
        <span className="widget-small-title text-2xl font-bold">Newly Joined</span>
        <ul className="widget-small-list m-0 p-0 mt-10">
            <li className="widget-small-list-item flex items-center justify-between mt-5 mb-5">
                <img className="widget-small-img text-4xl rounded-full object-cover h-10 mr-5" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU'/>
                    <div className="widget-small-user flex flex-col">
                        <span className="widget-small-username font-semibold">Daniel McIntyre</span>
                        <span className="widget-small-jobtitle font-light">Software Engineer</span>
                    </div>
                <button className="widget-small-button border flex items-center pt-2 pb-2 pr-2 pl-2 bg-slate-100 text-slate-500 ml-5"><VisibilityIcon/>
                    Display
                </button>
            </li>
            <li className="widget-small-list-item flex items-center justify-between mt-5 mb-5">
                <img className="widget-small-img text-4xl rounded-full object-cover h-10 mr-5" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU'/>
                    <div className="widget-small-user flex flex-col">
                        <span className="widget-small-username font-semibold">Daniel McIntyre</span>
                        <span className="widget-small-jobtitle font-light">Software Engineer</span>
                    </div>
                <button className="widget-small-button border flex items-center pt-2 pb-2 pr-2 pl-2 bg-slate-100 text-slate-500 ml-5"><VisibilityIcon/>
                    Display
                </button>
            </li>
            <li className="widget-small-list-item flex items-center justify-between mt-5 mb-5">
                <img className="widget-small-img text-4xl rounded-full object-cover h-10 mr-5" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU'/>
                    <div className="widget-small-user flex flex-col">
                        <span className="widget-small-username font-semibold">Daniel McIntyre</span>
                        <span className="widget-small-jobtitle font-light">Software Engineer</span>
                    </div>
                <button className="widget-small-button border flex items-center pt-2 pb-2 pr-2 pl-2 bg-slate-100 text-slate-500 ml-5"><VisibilityIcon/>
                    Display
                </button>
            </li>
            <li className="widget-small-list-item flex items-center justify-between mt-5 mb-5">
                <img className="widget-small-img text-4xl rounded-full object-cover h-10 mr-5" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU'/>
                    <div className="widget-small-user flex flex-col">
                        <span className="widget-small-username font-semibold">Daniel McIntyre</span>
                        <span className="widget-small-jobtitle font-light">Software Engineer</span>
                    </div>
                <button className="widget-small-button border flex items-center pt-2 pb-2 pr-2 pl-2 bg-slate-100 text-slate-500 ml-5"><VisibilityIcon/>
                    Display
                </button>
            </li>
            <li className="widget-small-list-item flex items-center justify-between mt-5 mb-5">
                <img className="widget-small-img text-4xl rounded-full object-cover h-10 mr-5" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU'/>
                    <div className="widget-small-user flex flex-col">
                        <span className="widget-small-username font-semibold">Daniel McIntyre</span>
                        <span className="widget-small-jobtitle font-light">Software Engineer</span>
                    </div>
                <button className="widget-small-button border flex items-center pt-2 pb-2 pr-2 pl-2 bg-slate-100 text-slate-500 ml-5"><VisibilityIcon/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default SmallWidget;