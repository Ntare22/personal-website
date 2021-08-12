import { Trans } from 'react-i18next';
import landscapeImg from '../images/jim-landscape-4.jpg'
import portraitImg from '../images/jim-potrait-color.jpg'

const Intro = ({ languages }) => {

    return (
        <div id='intro' className='bg-white'>
            <div className='mt-16 md:p-8 flex md:justify-evenly'>
                <p className='font-bold text-4xl'>Jim <br />Ntare</p>
                <p className='md:mt-4 mt-20 -ml-24'>
                    <Trans i18nKey='intro.text'>Full Stack Software Engineer / Blogger / Amateur Athlete / Speaker <br />26 Years Old, Kigali</Trans>
                </p>
                <div className='transform -rotate-90 flex my-8 hidden lg:block'>
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
