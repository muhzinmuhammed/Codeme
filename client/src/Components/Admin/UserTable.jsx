import {Table,Container} from 'react-bootstrap';
import { useState,useEffect } from 'react';

import adminaxiosInstance from '../../Axios/adminEndPoint';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserTable() {
    const [users,setUsers]=useState([])
    

    useEffect(() => {
        const userDetail = async () => {
          try {
            const response = await adminaxiosInstance.get('/admin/users_view');
           setUsers(response.data.users)
            
          } catch (error) {
          console.log(error);
          }
        };
    
        userDetail();
      }, []);
      const toggleUserStatus = async (user) => {
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
          setUsers([...users]); // Trigger a re-render
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
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
    
  {users?.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user?.username}</td>
      <td>{user?.useremail}</td>
      <td>{user?.phone}</td>
     
      <td>
                <button
                  onClick={() => toggleUserStatus(user)}
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