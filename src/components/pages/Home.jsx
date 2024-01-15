import styles from './Home.module.css'
import projects from '../../img/projects.svg'
import LinkButton from '../layout/LinkButton';
function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>GP</span></h1>
            <p>Comece a gerenciar seus projetos!</p>
            <LinkButton to="/newproject" text="Criar projeto" />
            <img src={projects} alt="GP" />
        </section>
    )
}

export default Home;