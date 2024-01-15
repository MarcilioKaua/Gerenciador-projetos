import { useEffect, useState } from 'react'

import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    async function fetchCategories() {
        const response = await fetch("http://localhost:5000/categories", {
            method: "Get",
            headers: {
                'content-type': 'application/json'
            }
        }).catch(err => console.log(err))

        const data = await response.json()
        setCategories(data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ""} />
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget : ""} />
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ""} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm