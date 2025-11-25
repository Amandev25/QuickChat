import { generateToken } from "../lib/utils.js";
import User from "../models/user.js";
import cloudinary from "../lib/cloudinary.js" ;
import bcrypt from "bcryptjs";
import Message from "../models/message.js";

// Sign up newUser : 
export const signup = async (req , res ) => {
  
    const { fullname , email , password , bio } = req.body ; 

    try {
        if(!fullname || !email || !password || !bio )
        {
            return res.json({success:false , message : "Missing Details"});

        }
        // check that this user already existed || not ? 
         const user = await User.findOne({email});

         if(user)
         {
            return res.json({success: false , message : "Account already existed"})
         }
         
         // If user doesn't exist earlier then we create new user ( 1. generate a new password )

         const salt = await bcrypt.genSalt(10) ;
         const hashedPassword = await bcrypt.hash(password , salt) ;
         
         const newUser = await User.create({
            fullname , email , password : hashedPassword , bio
         });

        const token = generateToken(newUser._id)

        res.json({success:true, userData: newUser , token , message: "Account created successfully"}) 



    } catch (error) {
        console.log(error.message);
        
         res.json({success:false, message: error.message }) 
    }
}

// Controller to login a user : 

export const login = async (req , res) => {

    try{
        const { fullname , email, password , bio } = req.body;
        const userData = await User.findOne({email});

        const isPasswordCorrect = await bcrypt.compare(password , userData.password);

        if(!isPasswordCorrect){
           return res.json({ success: false , message: "Invalid credentials !!"}); 
        }
        const token = generateToken(userData._id)

        res.json({success:true, userData , token , message: "Login successfully"}) 

    } catch( error ) {
          console.log(error.message);
          res.json({ success:false , message:error.message});
          
    }

}

// Controller to check if user is authenticated 

export const checkAuth = (req , res) => {

    res.json({success:true , user:req.user});

}

// Controller to update user profile details

export const updateProfile = async (req , res) => {
      let updatedUser ;
    try {
        const { profilePic , bio , fullname } = req.body ;
         
        const userId = req.user._id;
                   
        if( !profilePic )
        {
            updatedUser = await User.findByIdAndUpdate( userId , {bio , fullname}, {new:true});
        }else{
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate( userId , {profilePic : upload.secure_url , bio , fullname} , {new : true});
        }
        res.json({success:true , user : updatedUser})
    }catch (error){
       res.json({success : false , user : updatedUser});
    }
}

// Send message to selected user 

export const sendMessage = async (req , res) => {
    try {
        
        const { text , image } = req.body ; 
        const receiverId = req.params.id ; 
        const senderId = req.user._id ; 
          
        let imageUrl ;
        if(image){
           
          const uploadResponse = await cloudinary.uploader.upload(image);
          imageUrl = uploadResponse.secure_url ; 

        }

        const newMessage = await Message.create ({
            senderId,
            receiverId,
            text,
            image: imageUrl,            
        })

        res.json({success : true , newMessage}) ;
         

    } catch (error) {
        console.log(error.message);
        res.json({success : false , message: error.message});

    }
}