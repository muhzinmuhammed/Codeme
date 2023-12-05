
import './register.css'


const Register = () => {
  return (
    <>
    
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
        <div className=' items-center justify-center w-96 shadow-lg p-6 bg-white rounded-md'>
            <h1 className='text-3xl block text-center font-semibold'>
               Sign up</h1>
            <hr className='mt-3'/>
           <div className='mt-3'>
    <label htmlFor="username" className='block text-base mb-2'>User Name</label>
    <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 "placeholder='Enter your name...' />
</div>

<div className='mt-3'>
    <label htmlFor="username" className='block text-base mb-2'>User Email</label>
    <input type="email" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 "placeholder='Enter your Email...' />
</div>
<div className='mt-3'>
    <label htmlFor="username" className='block text-base mb-2'>User Phone</label>
    <input type="tel" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 "placeholder='Enter your Phone...' />
</div>

<div className='mt-3'>
    <label htmlFor="username" className='block text-base mb-2'>User Password</label>
    <input type="password" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 "placeholder='Enter your Password...' />
</div>

<div className='mt-3'>
    <label htmlFor="username" className='block text-base mb-2'>Confirm Password</label>
    <input type="password" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 "placeholder='Enter re Password...' />
</div>
<div className='mt-3 flex  justify-between items-center'>
        <div className='mt-4'>
            <button type='submit' className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5'>Signup</button>
        </div>
        </div>
        </div>

        
        
    </div>
    
    </>
  )
}

export default Register
