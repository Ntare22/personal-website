import { Trans } from 'react-i18next';

const About = () => {
    return (
        <div id='about'>
            <p>
                <Trans i18nKey='about.heading'>About me</Trans>
            </p>
            <p>
                <Trans i18nKey='about.para1'>Hi, I'm Jim – Software Engineer / Blogger from Kigali. I'm interested in everything technology and entreprenuership.</Trans>
            </p>
            <p>
                <Trans i18nKey='about.para2'>Formerly at Andela, I’m currently a Software Engineer at Bank Of Kigali and contributing to open source and pursuing personal projects.</Trans>
            </p>
            <p>
                <Trans i18nKey='about.para3'>Hire me to build you a website, moblie application, or speak at your event.</Trans>
            </p>
            <p>
                <Trans i18nKey='about.para4'>Ready to implement excellent projects with wonderful people.</Trans>
            </p>
        </div>
    )
}

export default About
