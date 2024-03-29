import { Trans } from 'react-i18next';
import Project from "./Project"

const Projects = () => {
    return (
        <div id='projects' className='bg-gray-200 flex flex-col text-center h-auto'>
            <div className='m-16 text-sm'>
                <p className='text-xl font-bold'>
                    <Trans i18nKey='projects.heading'>Projects</Trans>
                </p>
                <div className='mt-4'>
                    <Project />
                </div>
                <a href='https://github.com/Ntare22' rel="noreferrer" target='_blank' className='font-bold underline'>View More</a>
            </div>
        </div>
    )
}

export default Projects
