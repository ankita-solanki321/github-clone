const createRepository = (req ,res) =>{
    res.send("REpo created");

}
const getAllRepositories = (req ,res) =>{
    res.send("All repos");
    
}
const fetchRepositoryById = (req ,res) =>{
    res.send("REpo by id");
    
}
const fetchRepositoryByName = (req ,res) =>{
    res.send("REpo by name");
    
}
const fetchRepositoriesForCurrentUser = (req ,res) =>{
    res.send("REpo for current user");
    
}
const updateRepositoryById = (req ,res) =>{
    res.send("update repo");
    
}

const toggleVisibilityById = (req ,res) =>{
    res.send("Visibility toggled");
    
}
const deleteRepositoryById = (req ,res) =>{
    res.send("Repository deleted");
    
}

module.exports = {
    createRepository,
    getAllRepositories,
    fetchRepositoryById,
    fetchRepositoryByName,
    fetchRepositoriesForCurrentUser,
    updateRepositoryById,
    toggleVisibilityById,
    deleteRepositoryById
}