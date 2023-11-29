import { ObjectId } from "mongodb";
import { collections } from "../../../context/MongoConnection"
import Project from "../../domain/Project";
import UserRepository from "../../domain/Project.repository"

export default class ProjectRepositoryMongoDB implements UserRepository{
    async getAllProjects(): Promise<Project[] | undefined> {
        const projecstFromDB = await collections.projects.find().toArray();
        if(!projecstFromDB) return undefined;
        const projects : Project [] = projecstFromDB.map((projectFromDB)=>{
            const project : Project = {
                id : String(projectFromDB._id),
                title : String(projectFromDB.titulo)
            };
            return project;
        });
        return projects;
    }

     async getProjectById(id: string): Promise<Project | undefined> {
        const objectId = new ObjectId(id);
        const projectFromDB = await collections.projects.findOne({_id: objectId})
        if(!projectFromDB) return undefined;
        const project : Project = {
            id: String(projectFromDB._id),
            title : String(projectFromDB.titulo)
        };
        return project;
    }
}

