import { Trans } from "react-i18next";
// import { Route, Switch } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'

const NavBar = () => {
  const onToggle = async() => {
      const modal = document.getElementById('modal')
      
      if (modal.className.includes('hidden')) {
          modal.className = 'fixed block inset-x-0'
      } else {
          modal.className = 'hidden'
      }
  }
  
  return (
    <div>
      <nav
        id="navbar"
        className="fixed inset-x-0 top-0 bg-white xl:px-96 lg:px-60 md:px-48 py-8 font-bold hidden md:block"
        role="navigation"
      >
        <div className="flex justify-evenly">
          <Link smooth to="#intro">
            <Trans i18nKey="nav.home">Home</Trans>
          </Link>
          <Link smooth to="#about">
            <Trans i18nKey="nav.about">About Me</Trans>
          </Link>
          <Link smooth to="#skills">
            <Trans i18nKey="nav.skills">Skills</Trans>
          </Link>
          <Link smooth to="#projects">
            <Trans i18nKey="nav.projects">Projects</Trans>
          </Link>
          <Link smooth to="#contact">
            <Trans i18nKey="nav.contact">Contact</Trans>
          </Link>
        </div>
      </nav>
      <nav>
        <div id="hamburger" className={"bg-white fixed inset-x-0 top-0 flex justify-end md:hidden"} onClick={() => onToggle()} >
          <button>
            <svg
              className="w-10 h-10 m-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div id="modal" className="hidden">
            <div className="bg-white absolute font-bold text-center">
                <div className="grid fold:px-24 fold:py-64 moto:px-40 pixel:px-40 pixel:py-72 surface:px-56 iphone5:px-28 iphone6:px-36 iphone6plus:px-40">
                  <Link smooth to="#intro" className="w-24 md:-mt-32" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.home">Home</Trans>
                  </Link>
                  <Link smooth to="#about" className="md:-mt-24" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.about">About Me</Trans>
                  </Link>
                  <Link smooth to="#skills" className="md:-mt-16" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.skills">Skills</Trans>
                  </Link>
                  <Link smooth to="#projects" className="md:-mt-8" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.projects">Projects</Trans>
                  </Link>
                  <Link smooth to="#contact" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.contact">Contact</Trans>
                  </Link>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
