import { Trans } from 'react-i18next';

const Contact = () => {
    return (
        <div id='contact'>
            <p>
                <Trans i18nKey='contact.heading'>Get in Contact</Trans>
            </p>
            <p>
                <Trans i18nKey='contact.text'>Want to know more or just chat? <br />You are Welcome</Trans>
            </p>
            <button>
                <Trans i18nKey='contact.button'>Send Message</Trans>
            </button>
            <span>
                <a href='https://www.linkedin.com/in/jimntare/'>linkedin</a>
                <a href='https://www.instagram.com/jim.ntare/'>Instagram</a>
                <a href='https://twitter.com/JimNtare'>Twitter</a>
                <a href='https://github.com/Ntare22'>GitHub</a>
            </span>
        </div>
    )
}

export default Contact
