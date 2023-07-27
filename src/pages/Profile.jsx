import user from "../data/user"

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-5/6 h-1/2 rounded-xl bg-white border p-4">
        <div className="grid grid-cols-5 grid-rows-4 gap-1 h-full">
          <div className="col-span-2 row-span-4 flex justify-center items-center">
            <img src={user[0].image} alt="User profile" className="w-8/12 rounded-full" />
          </div>
          <div className="col-span-3 col-start-3 text-5xl font-bold flex items-end">{user[0].name}</div>
          <div className="col-span-3 col-start-3 row-start-2 text-3xl font-thin flex items-center">{user[0].email}</div>
          <div className="col-span-3 col-start-3 row-start-3 text-2xl font-medium">{user[0].username}</div>
          <div className="col-start-3 row-start-4 flex justify-start items-center">
            <button className="bg-esgreen rounded-lg px-4 py-2 text-white font-bold">
              edit profile {">"}
            </button>
          </div>
          <div className="col-start-4 row-start-4 flex justify-start items-center">
            <button className="bg-esgreen rounded-lg px-4 py-2 text-white font-bold">
              update password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile