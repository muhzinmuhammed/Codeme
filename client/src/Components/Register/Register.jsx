
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../Axios/axiosEndPoint'
import NavbarHeader from "../Navbar/Navbar";

const Register = () => {
    const [username, setName] = useState("");
    const [useremail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();
    const isStrongPassword = (password) => {
        // Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    };

    const isPhoneNumberValid = (phone) => {
        // Phone number validation using a simple regex for demonstration purposes.
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const isNameValid = (username) => {
        const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        return nameRegex.test(username);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const trimmedName = username.trim();
        const trimmedEmail = useremail.trim();
        const trimmedPhone = phone.trim();
        const trimmedPassword = password.trim();

        if (
            trimmedName === "" ||
            trimmedEmail === "" ||
            trimmedPhone === "" ||
            trimmedPassword === ""
        ) {
            toast.error("Please fill in all required fields.");
            return;
        }
        if (!isNameValid(trimmedName)) {
            toast.error('Please correct name')

        }
        if (!isStrongPassword(trimmedPassword)) {
            toast.error(
                "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters."
            );
            return;
        }

        if (password !== confirmpassword) {
            toast.error("Passwords do not match.");
            return;
        }

        if (!isPhoneNumberValid(trimmedPhone)) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        try {
            const response = await axiosInstance.post('/user/register', {
                username: trimmedName,
                useremail: trimmedEmail,
                phone: trimmedPhone,
                password: trimmedPassword,
            });
            console.log(response.data);

            navigate('/user_otp');
        } catch (error) {
            console.error('An error occurred while registering:',);
            toast.error("An error occurred.");
        }
    };
 
    return (
        <>
        <NavbarHeader/>
        <ToastContainer/>

            <div className='flex justify-center items-center h-screen bg-indigo-600'>
                <div className=' items-center justify-center w-96 shadow-lg p-6 bg-white rounded-md'>
                    <h1 className='text-3xl block text-center font-semibold'>
                        Sign up</h1>
                    <hr className='mt-3' />
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='mt-3'>

                            <label htmlFor="username" className='block text-base mb-2'>User Name</label>
                            <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600" value={username}
                                onChange={(e) => setName(e.target.value)} placeholder='Enter your name...' />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="username" className='block text-base mb-2'>User Email</label>
                            <input type="email" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 " value={useremail}
                                onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email...' />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="username" className='block text-base mb-2'>User Phone</label>
                            <input type="tel" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 " value={phone}
                                onChange={(e) => setPhone(e.target.value)} placeholder='Enter your Phone...' />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="username" className='block text-base mb-2'>User Password</label>
                            <input type="password" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600" value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password...' />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="username" className='block text-base mb-2'>Confirm Password</label>
                            <input type="password" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600" value={confirmpassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Enter re Password...' />
                        </div>
                        <div className='mt-3 flex  justify-between items-center'>
                            <div className='mt-4'>
                                <button type='submit' className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5'>Signup</button>
                            </div>
                        </div>
                    </form>
                </div>



            </div>

        </>
    )
}

export default Register
