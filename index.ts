import express from "express";
import CreateMongoConnection from "./context/MongoConnection";
CreateMongoConnection();

import projectRouter from "./projects/infrastructure/rest/project.route";

const app = express();
const port = 8080;

app.use(express.json());
app.use("/projects",projectRouter);

app.listen(port, ()=> {
    console.log(`Server is running  on port ${port}`)
})