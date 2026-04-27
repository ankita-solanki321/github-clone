// ACTUAL FUNCTIONALITY
const getAllUsers = (req,res) =>{
    res.send("all users fetched!!");
}

const signUp = (req,res) =>{
    res.send("Signup");
}

const login = (req,res) =>{
    res.send("all users fetched!!");
}

const getUserProfile = (req,res) =>{
    res.send("user fetched!!");
}

const updateUserProfile = (req,res) =>{
    res.send("Update Profile");
}

const deleteUserProfile = (req,res) =>{
    res.send("Delete profile");
}

module.exports ={
    getAllUsers,
    signUp ,
    login,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
}