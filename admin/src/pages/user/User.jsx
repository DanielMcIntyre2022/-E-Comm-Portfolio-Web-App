import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';

function User() {
  return (
    <div className="user flex-[4_4_0%] p-20">
        <div className="userTitleContainer flex items-center justify-between">
            <h1 className="userTitle text-2xl">Edit User</h1>
            <button className="userAddButton bg-teal-600 w-20 p-2 rounded text-white">Create</button>
        </div>    
                <div className="userContainer flex mt-5">
                    <div className="userShow flex-1 p-10 shadow-xl">
                        <div className="user-show-top flex items-center">
                            <img className="user-show-image w-10 h-10 rounded-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU"
                            />
                            <div className="user-show-top-title flex">
                                <span className="user-show-username ml-6 font-semibold">Daniel McIntyre</span>
                                <span className="user-show-title font-thin">Software Engineer</span>
                            </div>
                        </div>
                        <div className="user-show-bottom mt-5">
                                <span className="user-show-title font-semibold text-slate-400">Account Details</span>
                            <div className='user-show-info mt-5'>
                                    <PermIdentityIcon className='user-show-icon'/>
                                <span className='user-show-info-title ml-2'>Daniel.McIntyre2022</span>
                            </div>
                            <div className='user-show-info mt-2 mb-8'>
                                    <CalendarTodayIcon className='user-show-icon'/>
                                <span className='user-show-info-title ml-2'>06/26/1990</span>
                            </div>
                            <span className="user-show-title font-semibold text-slate-400">Contact Details</span>
                            <div className='user-show-info mt-6'>
                                    <PhoneIphoneIcon className='user-show-icon'/>
                                <span className='user-show-info-title ml-2'>Fake Number</span>
                            </div>
                            <div className='user-show-info mt-2'>
                                    <MailOutlineIcon  className='user-show-icon'/>
                                <span className='user-show-info-title ml-2'>Fake Email</span>
                            </div>
                            <div className='user-show-info mt-2'>
                                    <LocationSearchingIcon className='user-show-icon'/>
                                <span className='user-show-info-title ml-2'>Fake Address</span>
                            </div>
                        </div>
                    </div>
                <div className="userUpdate flex-[2_2_0%] p-10 shadow-xl ml-10">
                <span className='user-update-title'>Edit</span>
                    <form className='user-update-form'>
                        <div className='userUpdateLeft'>
                            <div className="userUpdateItem">
                                <label>Username:</label>
                                <input className="userUpdateInput border" placeholder="Daniel.McIntyre2022" type="text"></input>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name:</label>
                                <input className="userUpdateInput border" placeholder="Daniel McIntyre" type="text"></input>
                            </div>
                            <div className="userUpdateItem">
                                <label>Number:</label>
                                <input className="userUpdateInput border" placeholder="Fake Number" type="text"></input>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email:</label>
                                <input className="userUpdateInput border" placeholder="Email" type="text"></input>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address:</label>
                                <input className="userUpdateInput border" placeholder="Fake Address" type="text"></input>
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='user-update-upload'>
                                <img className="user-update-img w-24 h-24 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU"/>
                                <label htmlFor='file'><PublishIcon/></label>
                                <input type="file" id='file' style={{display:'none'}}/>
                            </div>
                        </div>
                    </form>
            </div>
         </div>
    </div>
  )
}

export default User;