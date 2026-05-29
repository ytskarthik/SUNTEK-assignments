import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
function UserList() {
    let [users,setUsers]=useState([]);
    let navigate=useNavigate();
    //const [gotoUser,setGoToUser]=useState(false);
    useEffect(()=>{
        async function getUsers(){
            try{
            let res=await fetch("http://localhost:5000/user-api/users", {
                method:"GET"
            })
            if (res.status===200){
                console.log("users fetched successfully")
                //extract data from response
                let resObj=await res.json();
                //update users state
                setUsers(resObj.payload);
            }else{
                console.log("error in fetching users")
            }
        }catch(err){
            //set error
                console.log(err)
            }
        }
        getUsers();
    },[])
    //go to user
    const goToUser=(userObj)=>{
        //navigate to user details page
        navigate("/user",{
            state:{
                user:userObj
            }
        })
        
        
    }
  return (
    <div>
    <h1 className="text-5xl text-gray-600 mb-6">List of users</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {users?.map((userObj) => (
          <div key={userObj.email} className="border-2 border-gray-400 p-5 shadow-2xl m-5 cursor-pointer rounded-md" onClick={()=>goToUser(userObj)}>
            <h2 className="text-2xl font-bold">{userObj.name}</h2>
            <p className="text-gray-600">{userObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
{/**
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {users?.map((userObj)=>())}
    {
        users?.payload?.map((user)=>{
            return (
                <div key={user._id} className="border-2 border-gray-400 p-5 shadow-2xl m-5 cursor-pointer rounded-md">
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.mobileNumber}</p>
                    <p className="text-gray-600">{new Date(user.dateOfBirth).toLocaleDateString()}</p>
                </div>
            )
        })
    }
    </div>
    */}
export default UserList