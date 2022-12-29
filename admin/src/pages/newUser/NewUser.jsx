
function NewUser() {
  return (
    <div className="new-user flex-[4]">
        <h1 className="new-user-title">New User</h1>
        <form className="new-user-form">
            <div className="new-user-form-item">
                <label>Username: </label>
                <input
                type="text"
                placeholder="Daniel"
                />
            </div>
            <div className="new-user-form-item">
                <label>Fullname: </label>
                <input
                type="text"
                placeholder="Daniel McIntyre"
                />
            </div>
            <div className="new-user-form-item">
                <label>Email: </label>
                <input
                type="text"
                placeholder="Fake Email"
                />
            </div>
            <div className="new-user-form-item">
                <label>Password: </label>
                <input
                type="password"
                placeholder="password"
                />
            </div>
            <div className="new-user-form-item">
                <label>Phone: </label>
                <input
                type="text"
                placeholder="Fake Number"
                />
            </div>
            <div className="new-user-form-item">
                <label>Address: </label>
                <input
                type="text"
                placeholder="Fake Address"
                />
            </div>
            <div className="new-user-item">
                 <label>Active</label>
                 <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                 </select>
            </div>
        </form>
    </div>
  )
}

export default NewUser;