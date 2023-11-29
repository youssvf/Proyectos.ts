import express from "express";
import ProjectRepository from "../../domain/Project.repository";
import ProjectRepositoryMongoDB from "../db/project.mongo";


const router = express.Router();
const projectRepository : ProjectRepository = new ProjectRepositoryMongoDB();


router.get("/",async (req, res) => {
    try{
        const projects = await projectRepository.getAllProjects();
        res.json(projects);
    }catch(error){
        res.status(500).json({error : "Internal error"})
    }
});

router.get("/:id",async (req, res)=>{
    try{
        const projectId = req.params.id;
        const project = await projectRepository.getProjectById(projectId);
        if(project){
            res.json(project);
        } else {
            res.status(404).json({error : "Project not found"})
        }        
    } catch(error){
        res.status(500).json({error : "Internal Server Error"});
    }
    
});

export default router;
