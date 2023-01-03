import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';

function SmallWidget() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get('users/?new=true')
                setUsers(res.data)
            } catch (error) {
                console.log(error)     
            }
        };
        getUsers();
    },[]);

  return (
    <div className="small-widget shadow-xl p-20 mr-20">
        <span className="widget-small-title text-2xl font-bold">Newly Joined</span>
        <ul className="widget-small-list m-0 p-0 mt-10">
            {users.map((user) => (
                <li className="widget-small-list-item flex items-center justify-between mt-5 mb-5" key={user._id}>
                <img className="widget-small-img text-4xl rounded-full object-cover h-10 mr-5" src={user.img || 'https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg'}/>
                    <div className="widget-small-user flex flex-col">
                        <span className="widget-small-username font-semibold">{user.username}</span>
                    </div>
                <button className="widget-small-button border flex items-center pt-2 pb-2 pr-2 pl-2 bg-slate-100 text-slate-500 ml-5"><VisibilityIcon/>
                    Display
                </button>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SmallWidget;