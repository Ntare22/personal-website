import { Trans } from 'react-i18next';

const About = () => {
    return (
        <div id='about' className='bg-gray-200 flex flex-col text-center h-auto'>
            <div className='m-16 text-sm'>
                <p className='text-xl font-bold'>
                    <Trans i18nKey='about.heading'>About me</Trans>
                </p>
                <p className='mt-4'>
                    <Trans i18nKey='about.para1'>Hi, I'm Jim – Software Engineer / Blogger from Kigali. I'm interested in everything technology and entreprenuership.</Trans>
                </p>
                <p className='mt-3'>
                    <Trans i18nKey='about.para2'>Formerly at Andela, I’m currently a Software Engineer at Bank Of Kigali and contributing to open source and pursuing personal projects.</Trans>
                </p>
                <p className='mt-3'>
                    <Trans i18nKey='about.para3'>Hire me to build you a website, moblie application, or speak at your event.</Trans>
                </p>
                <p className='mt-3'>
                    <Trans i18nKey='about.para4'>Ready to implement excellent projects with wonderful people.</Trans>
                </p>
            </div>
        </div>
    )
}

export default About
