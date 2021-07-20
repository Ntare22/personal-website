import { Trans } from 'react-i18next';
import Skill from "./Skill"

const Skills = () => {
    return (
        <div id='skill'>
            <p>
                <Trans i18nKey='skills.heading'>Skills</Trans>
            </p>
            <p>
                <Trans i18nKey='skills.text'>I work with technologies including</Trans>
            </p>
            <Skill />
            <button>
                <Trans i18nKey='skills.download'>Download Resume</Trans>
            </button>
        </div>
    )
}

export default Skills
