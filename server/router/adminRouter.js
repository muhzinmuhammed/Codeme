import express from 'express'
import { adminLogin } from '../controller/adminControler/adminController.js';
import { blockStudent, unBlockStudent, userView } from '../controller/adminControler/userViewTable.js';
import { addQuiz } from '../controller/adminControler/quizController.js';
const adminRouer=express.Router();
 

/*admin_login*/
adminRouer.post('/admin_login',adminLogin)

/*admin_login*/

/*user view */
adminRouer.get('/users_view',userView)

/*user block*/
adminRouer.put('/blockStudents/:id',blockStudent)

/*user unblock*/
adminRouer.put('/unblockStudents/:id',unBlockStudent)

/*add  quiz*/

adminRouer.post('/add_quiz',addQuiz)

export default adminRouer