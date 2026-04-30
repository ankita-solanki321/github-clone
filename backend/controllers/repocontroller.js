const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
const User = require("../models/userModel");
const Issue = require("../models/issueModel");

async function createRepository(req, res) {
  const { owner, name, issues, content, description, visibility } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ error: "Repository name is required!" });
    }

    if (!mongoose.Types.ObjectId.isValid(owner)) {
      return res.status(400).json({ error: "Invalid User ID!" });
    }

    const newRepository = new Repository({
      name,
      description,
      visibility,
      owner,
      content,
      issues,
    });

    const result = await newRepository.save();

    res.status(201).json({
      message: "Repository created!",
      repositoryID: result._id,
    });
  } catch (err) {
    console.error("Error during repository creation : ", err.message);
    res.status(500).send("Server error");
  }
}
async function getAllRepositories(req, res) {
  try {
    const repositories = await Repository.find({})
      .populate("owner")  //we were using this poopulate so that in output instead of object id we saw the content of that object id
      .populate("issues");

    res.json(repositories);
  } catch (err) {
    console.error("Error during fetching repositories : ", err.message);
    res.status(500).send("Server error");
  }
}

async function fetchRepositoryById(req, res) {
  const { id } = req.params;
  try {
    const repository = await Repository.find({ _id: id })
      .populate("owner")
      .populate("issues");

    res.json(repository);
  } catch (err) {
    console.error("Error during fetching repository : ", err.message);
    res.status(500).send("Server error");
  }
}

async function fetchRepositoryByName(req, res) {
  const { name } = req.params;
  try {
    const repository = await Repository.find({ name })
      .populate("owner")
      .populate("issues");

    res.json(repository);
  } catch (err) {
    console.error("Error during fetching repository : ", err.message);
    res.status(500).send("Server error");
  }
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