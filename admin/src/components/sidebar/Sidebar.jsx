import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar flex-1 bg-slate-50 h-screen ">
        <div className="sidebar-wrapper p-10">
            <div className="sidebar-menu mb-5">

                {/* DASHBOARD */}

                <h3 className="sidebar-title text-xl mb-5 text-slate-400">Dashboard</h3>
                <ul className="sidebar-list ml-5">
                    <li className="sidebar-list-item p-1 flex items-center cursor-pointer">
                        <LineStyleIcon/>
                        <span className='ml-2'>Home</span>
                    </li>
                    <li className="sidebar-list-item p-1 flex items-center cursor-pointer">
                        <TimelineIcon/>
                        <span className='ml-2'>Analytics</span>
                    </li>
                    <li className="sidebar-list-item p-1 flex items-center cursor-pointer">
                        <TrendingUpIcon/>
                        <span className='ml-2'>Sales</span>
                    </li>
                </ul>
            </div>

            {/* QUICK MENU */}

            <div className="sidebar-menu mb-5">
                <h3 className="sidebar-title text-xl mb-5 text-slate-400">Quick Menu</h3>
                <ul className="sidebar-list ml-5">
                    <li className="sidebar-list-item p-1 flex items-center cursor-pointer">
                        <PersonOutlineIcon/>
                        <Link to='/users'>
                            <span className='ml-2'>Users</span>
                        </Link>
                    </li>
                    <li className="sidebar-list-item p-1 flex items-center cursor-pointer">
                        <ProductionQuantityLimitsIcon/>
                        <span className='ml-2'>Products</span>
                    </li>
                    <li className="sidebar-list-item p-1 flex items-center cursor-pointer">
                        <AttachMoneyIcon/>
                        <span className='ml-2'>Transactions</span>
                    </li>
                    <li className="sidebar-list-item p-1 flex items-center cursor-pointer">
                        <SignalCellularAltIcon/>
                        <span className='ml-2'>Reports</span>
                    </li>
                </ul>
            </div>
            
            {/* NOTIFICATIONS */}

            <div className="sidebar-menu mb-5">
                <h3 className="sidebar-title text-xl mb-5 text-slate-400">Notifications</h3>
                <ul className="sidebar-list ml-5">
                    <li className="sidebar-list-item p-2 flex items-center cursor-pointer">
                        <MailOutlineIcon/>
                        <span className='ml-2'> Mail </span>
                    </li>
                    <li className="sidebar-list-item p-2 flex items-center cursor-pointer">
                        <ThumbUpOffAltIcon/>
                        <span className='ml-2'>Feedback</span>
                    </li>
                    <li className="sidebar-list-item p-2 flex items-center cursor-pointer">
                        <ChatBubbleOutlineIcon/>
                        <span className='ml-2'>Messages</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;