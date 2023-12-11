import {useState,useEffect} from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from '../../Axios/adminEndPoint'
import { useDispatch } from "react-redux";
import {  signup } from "../../features/userSlice";
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const [adminemail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const adminData = localStorage.getItem("adminData");
        const parseData = adminData ? JSON.parse(adminData) : null;
        if (parseData) {
          navigate("/user_view");
        }else{
          navigate("/admin_login");
    
        }
      }, [navigate]);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const trimmedEmail = adminemail.trim();
        const trimmedPassword = password.trim();
        if (trimmedEmail === "" || trimmedPassword === "") {
          toast.error("Please fill in all required fields.");
          return;
        }
        try {
          const response = await axiosInstance.post("/admin/admin_login", {
            adminemail: trimmedEmail,
            password: trimmedPassword,
          });
          const admindata = response.data;
          localStorage.setItem("adminData", JSON.stringify(admindata));
          localStorage.setItem("adminData", JSON.stringify(admindata.token));
    
          dispatch(signup(admindata));
          navigate("/user_view");
    
          toast.success("User created successfully.");
        } catch (error) {
          console.error(error);
          toast.error("User is blocked or please correct password");
        }
      };
  return (
    <>
   
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
        <ToastContainer/>
    <div className=' items-center justify-center w-96 shadow-lg p-6 bg-white rounded-md'>
        <h1 className='text-3xl block text-center font-semibold'>
          Admin Login</h1>
        <hr className='mt-3' />
        <form onSubmit={(e) => handleSubmit(e)}>
           

            <div className='mt-3'>
                <label htmlFor="username" className='block text-base mb-2'> Email</label>
                <input type="email" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 " value={adminemail}
                    onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email...' />
            </div>
            

            <div className='mt-3'>
                <label htmlFor="username" className='block text-base mb-2'> Password</label>
                <input type="password" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600" value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password...' />
            </div>

           
            <div className='mt-3 flex  justify-between items-center'>
                <div className='mt-4'>
                    <button type='submit' className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5'>Login</button>
                </div>
            </div>
        </form>
    </div>



</div>
    </>
    
  )
}

export default AdminLogin
