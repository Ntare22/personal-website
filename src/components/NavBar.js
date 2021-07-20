import { Trans } from 'react-i18next';

const NavBar = () => {

    return (
        <header id='navbar'>
            <a href='#navbar'>
                <Trans i18nKey='nav.home'>Home</Trans>
            </a>
            <a href='#about'>
                <Trans i18nKey='nav.about'>About Me</Trans>
            </a>
            <a href='#skills'>
                <Trans i18nKey='nav.skills'>Skills</Trans>
                
            </a>
            <a href='#projects'>
                <Trans i18nKey='nav.projects'>Projects</Trans>
            </a>
            <a href='#contact'>
                <Trans i18nKey='nav.contact'>Contact</Trans>
            </a>
        </header>
    )
}

export default NavBar
