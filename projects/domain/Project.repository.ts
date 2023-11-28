import Project from "./Project";

export default interface ProjectRepository{
    getAllProjects(): Promise<Project[] | undefined>;
    getProjectById(id: string): Promise<Project[] | undefined>;
}