import { Trans } from 'react-i18next';
import landscapeImg from '../images/landscape.jpeg'
import portraitImg from '../images/pic-portrait.jpeg'

const Intro = ({ languages }) => {

    return (
        <div id='intro' className='bg-white'>
            <div className='flex md:justify-evenly md:py-8 flex-wrap md:flex-nowrap mt-16 md:mt-32'>
                <p className='text-4xl font-bold'>Jim <br />Ntare</p>
                <p className='text-xs lg:text-sm text-left mt-4'>
                    <Trans i18nKey='intro.text'>Full Stack Software Engineer / Blogger / Amateur Athlete / Speaker <br />26 Years Old, Kigali</Trans>
                </p>
                <div className='transform -rotate-90 flex my-8 hidden lg:block -ml-24'>
                    {languages}
                </div>
            </div>
            <div className='flex md:justify-evenly hidden md:block md:mr-28 md:ml-28 md:mb-8 xl:mr-80 xl:ml-80'>
                <img alt='Jims profic pic' src={landscapeImg}/>
            </div>
            <div className='flex md:justify-evenly md:hidden'>
                <img alt='Jims profic pic' src={portraitImg}/>
            </div>
        </div>
    )
}

export default Intro
