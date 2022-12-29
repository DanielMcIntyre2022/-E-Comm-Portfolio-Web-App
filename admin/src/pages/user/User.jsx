
function User() {
  return (
    <div className="user flex-[4_4_0%] p-20">
        <div className="userTitleContainer flex items-center justify-between">
            <h1 className="userTitle text-2xl">Edit User</h1>
            <button className="userAddButton bg-teal-600 w-20 p-2 rounded text-white">Create</button>
        </div>    
                <div className="userContainer flex mt-5">
                    <div className="userShow flex-1 p-10 shadow-xl"></div>
                    <div className="userUpdate flex-[2_2_0%] p-10 shadow-xl ml-10"></div>
         </div>
    </div>
  )
}

export default User;