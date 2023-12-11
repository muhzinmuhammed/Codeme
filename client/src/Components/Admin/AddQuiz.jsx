import {useState} from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from '../../Axios/axiosEndPoint'


import { useNavigate } from 'react-router-dom';


const AddQuiz = () => {
    const navigate=useNavigate()
 
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [answer,setAnswer]=useState('')
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
      
        if (question === "" || option1 === ""||option2=="" || option3==""||answer=="") {
          toast.error("Please fill in all required fields.");
          return;
        }
        try {
          const response = await axiosInstance.post("/admin/add_quiz", {
            question,
            option1,
            option2,
            option3,
            answer
            
          });
          console.log(response.data);
          
          toast.success("Quiz successfully.");
          setTimeout(() => {
            
          navigate("/user_view");
    
         
            
          }, 1000);
        } catch (error) {
          console.error(error);
          toast.error("Some error");
        }
      };
  return (
    <>
   
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
        <ToastContainer/>
    <div className=' items-center justify-center w-96 shadow-lg p-6 bg-white rounded-md'>
        <h1 className='text-3xl block text-center font-semibold'>
         Quiz</h1>
        <hr className='mt-3' />
        <form onSubmit={(e) => handleSubmit(e)}>
           

            <div className='mt-3'>
                <label htmlFor="username" className='block text-base mb-2'> Question</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600 " value={question}
                    onChange={(e) => setQuestion(e.target.value)} placeholder='Enter Question' />
            </div>
            

            <div className='mt-3'>
                <label htmlFor="username" className='block text-base mb-2'> Option1</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600" value={option1}
                    onChange={(e) => setOption1(e.target.value)} placeholder='Enter text...' />
            </div>

            <div className='mt-3'>
                <label htmlFor="username" className='block text-base mb-2'> Option2</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600" value={option2}
                    onChange={(e) => setOption2(e.target.value)} placeholder='Enter text...' />
            </div>


            <div className='mt-3'>
                <label htmlFor="username" className='block text-base mb-2'> Option3</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none  focus:ring-0 focus:border-gray-600" value={option3}
                    onChange={(e) => setOption3(e.target.value)} placeholder='Enter text...' />
            </div>

            

            <div className='mt-3'>
  <label htmlFor="username" className='block text-base mb-2'> Answer</label>
  <select id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" value={answer} onChange={(e) => setAnswer(e.target.value)}>
    <option value="">Select an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>


           



            <div className='mt-3 flex  justify-between items-center'>
                <div className='mt-4'>
                    <button type='submit' className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5'>Sumbit</button>
                </div>
            </div>
        </form>
    </div>



</div>
    </>
    
  )
}

export default AddQuiz
