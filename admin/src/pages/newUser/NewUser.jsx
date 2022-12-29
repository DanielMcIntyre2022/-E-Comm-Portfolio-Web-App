
function NewUser() {
  return (
    <div className="new-user flex-[4] ml-10">
        <h1 className="new-user-title text-2xl">New User</h1>
        <form className="new-user-form flex flex-wrap">
            <div className="new-user-form-item flex flex-col mt-10 w-2/4">
                <label>Username: </label>
                <input
                type="text"
                placeholder="Daniel"
                className=" border-[2px] p-2"
                />
            </div>
            <div className="new-user-form-item flex flex-col mt-10 w-2/4">
                <label>Fullname: </label>
                <input
                type="text"
                placeholder="Daniel McIntyre"
                className=" border-[2px] p-2"
                />
            </div>
            <div className="new-user-form-item flex flex-col mt-10 w-2/4">
                <label>Email: </label>
                <input
                type="text"
                placeholder="Fake Email"
                className=" border-[2px] p-2"
                />
            </div>
            <div className="new-user-form-item flex flex-col mt-10 w-2/4">
                <label>Password: </label>
                <input
                type="password"
                placeholder="password"
                className=" border-[2px] p-2"
                />
            </div>
            <div className="new-user-form-item flex flex-col mt-10 w-2/4">
                <label>Phone: </label>
                <input
                type="text"
                placeholder="Fake Number"
                className=" border-[2px] p-2"
                />
            </div>
            <div className="new-user-form-item flex flex-col mt-10 w-2/4">
                <label>Address: </label>
                <input
                type="text"
                placeholder="Fake Address"
                className="border-[2px] p-2"
                />
            </div>
            <div className="new-user-item flex flex-col mt-10 w-96">
                 <label>Active</label>
                 <select className="newUserSelect p-2" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                 </select>
            </div>
            <button className="new-user-button w-28 h-12 border-[2px] bg-teal-500 text-white rounded-lg mt-14 ml-20">Create</button>
        </form>
    </div>
  )
}

export default NewUser;