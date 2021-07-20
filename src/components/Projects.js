import { Trans } from 'react-i18next';
import Project from "./Project"

const Projects = () => {
    return (
        <div id='projects'>
            <p>
                <Trans i18nKey='projects.heading'>Projects</Trans>
            </p>
            <Project />
        </div>
    )
}

export default Projects
