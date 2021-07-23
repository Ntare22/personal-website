import { Trans } from 'react-i18next';
import Skill from "./Skill"

const Skills = () => {
    return (
        <div id='skills' className='bg-white flex flex-col text-center h-auto'>
            <div className='m-16 text-sm'>
                <p className='text-xl font-bold'>
                    <Trans i18nKey='skills.heading'>Skills</Trans>
                </p>
                <p className='mt-4'>
                    <Trans i18nKey='skills.text'>I work with technologies including,</Trans>
                </p>
                <div className='mt-4'>
                    <Skill />
                </div>
                <button className='mt-8 border-2 border-black hover:bg-black hover:text-white'>
                    <div className='m-3'>
                        <Trans i18nKey='skills.download'>Download Resume</Trans>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Skills
