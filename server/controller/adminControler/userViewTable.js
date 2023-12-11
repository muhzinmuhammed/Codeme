import userModel from "../../models/userModel.js";

/*user view*/
const userView=async(req,res)=>{
    try {
      
        const users =await userModel.find().where({isBlocked:false})
      
        if (users) {
            return res.status(200).json({users})
            
        }

        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'Internal server error'})
        
    }
}

/*block student*/

const blockStudent = async (req, res) => {
    try {
      const { id } = req.params;
  
      const userToBlock = await userModel.findById(id);
  
      if (!userToBlock) {
        return res.status(404).json({ message: "User not found" });
      }
  
      userToBlock.isBlocked = true; // Set the 'isBlocked' property to true
      await userToBlock.save();
  
      return res.status(200).json({ message: "User blocked successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  ; /*block student*/
  
  /*unblock student*/
  const unBlockStudent = async (req, res) => {
    try {
      const { id } = req.params;
    
  
      const userToBlock = await userModel.findById(id);
  
      if (!userToBlock) {
        return res.status(404).json({ message: "User not found" });
      }
  
      userToBlock.isBlocked = false; // Set the 'isBlocked' property to true
      await userToBlock.save();
  
      return res.status(200).json({ message: "User unblocked successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  /*unblock student*/
  

export {userView,blockStudent,unBlockStudent}