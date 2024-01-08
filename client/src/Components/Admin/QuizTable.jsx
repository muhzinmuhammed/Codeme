import {Table,Container} from 'react-bootstrap';
import { useState,useEffect } from 'react';

import adminaxiosInstance from '../../Axios/adminEndPoint';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserTable() {
    const [quizes,setQuizes]=useState([])
    

    useEffect(() => {
        const quizDetail = async () => {
          try {
            const response = await adminaxiosInstance.get('/admin/get_quiz');
           setQuizes(response.data.quizes)
            
          } catch (error) {
          console.log(error);
          }
        };
    
        quizDetail();
      }, []);
      const toggleQuizStatus = async (user) => {
        try {
          if (user.isBlocked === false) {
            await adminaxiosInstance.put(`/admin/blockStudents/${user._id}`);
            user.isBlocked = true;
            toast.success("User Blocked Successfully");
          } else {
            await adminaxiosInstance.put(`/admin/unblockStudents/${user._id}`);
            user.isBlocked = false;
            toast.success("User Unblocked Successfully");
          }
          // Update the user's status in local storage
          localStorage.setItem(
            `user_${user._id}_status`,
            user.isBlocked ? "blocked" : "unblocked"
          );
          setQuizes([...quizes]); // Trigger a re-render
        } catch (error) {
          // Handle errors and display an error message to the user
          toast.error("error");
        }
      };
  return (
    <Container>
             <ToastContainer />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Option1</th>
          <th>Option2</th>
          <th>Option3</th>
          <th>Answer</th>


        </tr>
      </thead>
      <tbody>
    
  {quizes?.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user?.username}</td>
      <td>{user?.useremail}</td>
      <td>{user?.phone}</td>
     
      <td>
                <button
                  onClick={() => toggleQuizStatus(user)}
                  className={
                    user.isBlocked === false
                      ? "btn btn-success"
                      : "btn btn-danger"
                  }
                >
                  {user?.isBlocked === false ? "Block" : "Unblock"}
                </button>
              </td>
    </tr>
  ))}


       
       
      </tbody>
    </Table>
    </Container>
  );
}

export default UserTable