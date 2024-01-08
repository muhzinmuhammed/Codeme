import quizModel from "../../models/quizModel.js";
/*add quiz*/
const addQuiz = async (req, res) => {
    console.log(req.body,"ppp");
    try {
        const { question, option1, option2, option3, answer } = req.body
        const quizData =await quizModel.create({
            question,
            option1,
            option2,
            option3,
            answer

        })
     
        if (quizData) {
            return res.status(200).json({ message: 'success' })

        } else {
            return res.status(400).json({ message: 'No data added' })

        }


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internalserver error' })

    }
}

/*add quiz*/


/*get quiz*/

const getQuiz=async(req,res)=>{
    try {
        const quizes=await quizModel.find().exec()
        if (quizes) {
            return res.status(200).json({quizes})
            
        }else{
            return res.status(400).json({message:'No quizes'})
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'Internal server'})

        
    }
}

/*get quiz*/

export {addQuiz,getQuiz}