import Project from "../domain/Project";
import ProjectRepository from "../domain/Project.repository";

export class ProjectUseCases{
    private projectrepository : ProjectRepository;

    constructor(projectrepository : ProjectRepository){
        this.projectrepository = projectrepository;
    }

    async getAllProjects(){
        return await this.projectrepository.getAllProjects();
    }

    async getProjectById(id : string){
        return await this.projectrepository.getProjectById(id);
    }

}