import { Link } from "react-router-dom"
import Container from "./Container"

import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img className={styles.logo} src={logo} alt="Gerenciador de Projetos" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="projects">Projetos</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar