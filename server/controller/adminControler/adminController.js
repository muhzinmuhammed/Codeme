
import generateToken from "../../utilitis/genarateToken.js";

/*admin login*/
const adminLogin = async (req, res) => {
    const { adminemail, password } = req.body;
    console.log(req.body);
    const email='admin@gmail.com'
    const pass='12345'

    try {

        if (email==adminemail&&pass==password) {
            const token = generateToken(pass);
            return res.json({
               
                token,
            }); 
            
        }

       

       
}catch{
    console.log(error,message);
    res.status(500).json({message:'Something erro'})

}
}

export {
    adminLogin
}