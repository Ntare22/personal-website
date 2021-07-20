import { Trans } from 'react-i18next';

const Intro = ({ languages }) => {

    return (
        <div id='intro'>
            <p>Jim <br />Ntare</p>
            <p>
                <Trans i18nKey='intro.text'>Full Stack Software Engineer / Blogger / Amateur Athlete / Speaker <br />26 Years Old, Kigali</Trans>
            </p>
            <div>
                {languages}
            </div>
            <img alt='Jims profic pic' src='#'/>
        </div>
    )
}

export default Intro
