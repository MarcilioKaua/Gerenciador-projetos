import {  useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject() {

    const navigate =  useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []

        async function fetchProjects() {
            const response = await fetch("http://localhost:5000/projects", {
                method: "Post",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(project)
            }).catch((err) => console.log(err))
            const data = await response.json()
            navigate("/projects", { state: { message: "Projeto criado com sucesso!" }})
        }

        fetchProjects()
    }

    return (
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject;