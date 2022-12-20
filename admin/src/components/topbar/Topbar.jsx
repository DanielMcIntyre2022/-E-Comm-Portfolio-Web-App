import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


function Topbar() {
  return (
    <div className="topbar w-100% h-12 bg-white sticky top-0">
        <div className="topbar-wrapper flex h-full pt-0 pb-0 pl-20 pr-20 items-center justify-between">
            <div className="top-left">
              <span className="logo font-bold text-3xl text-cyan-600">E-Comm Admin Panel</span>
            </div>
            <div className="top-right flex items-center text-zinc-500">
              <div className="topbar-icon-container relative cursor-pointer">
                  <NotificationsNoneIcon/>
                  <span className='topbar-icon-badge absolute -top-2 right-3 bg-red-400 text-white rounded-full w-4 h-5 flex align-center justify-center text-sm'>2</span>
              </div>
              <div className="topbar-icon-container relative cursor-pointer">
                  <LanguageIcon/>
              </div>
              <div className="topbar-icon-container relative cursor-pointer">
                  <SettingsIcon/>
              </div>
              <img src='https://media-exp1.licdn.com/dms/image/C5603AQHg0yzW6AhhVw/profile-displayphoto-shrink_400_400/0/1655743302017?e=1671667200&v=beta&t=6AC_TqalweSDK8NkkHSJTSJEPZpNzsg6GqKfTfGn1HU' className='top-avatar w-10 rounded-full cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Topbar;