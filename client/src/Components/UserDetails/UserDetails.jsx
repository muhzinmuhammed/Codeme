import { toast } from 'react-toastify';
import axiosInstance from '../../Axios/axiosEndPoint';
import './userdetail.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UserDetails = () => {
    const navigate=useNavigate()
  const [userData, setUserData] = useState([]);
  const storedUserData = localStorage.getItem('userData');
  const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const parseData = userData ? JSON.parse(userData) : null;
    if (parseData) {
      navigate("/");
    }else{
      navigate("/login");

    }
  }, [navigate]);
  useEffect(() => {
    const userDetail = async () => {
      try {
        const response = await axiosInstance.get(`/user/user_details/${parsedUserData?._id}`);
        console.log(response.data, 'oooo');
        setUserData(response.data.userDetails);
      } catch (error) {
        toast.error(error.message);
      }
    };

    userDetail();
  }, [parsedUserData?._id]);

  return (
    <div className="container h-100 mt-40">
      {userData.map((user) => (
        <div key={user?._id} className="row h-100 align-items-center justify-content-center">
          <div className="main ">
            <div className="info ">
              <img src="http://i63.tinypic.com/2m6vae8.jpg" className="prof rounded-circle img-fluid" />
            
              <hr />
            </div>
            <div className="body justify-center items-center">
            <h1 className='mt-10'>User Name :{user?.username}</h1>
              <ul className="fa-ul">
                <li>
                  <span className="fa-li text-center justify-center">
                    <i className="fas fa-heart"></i>
                  </span>
                User Email :  {user?.useremail}
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-heart"></i>
                  </span>
              User Phone    {user?.phone}
                </li>
               
              </ul>
            </div>
            <div className="footer">
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-tumblr"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
