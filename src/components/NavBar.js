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
        className="fixed inset-x-0 top-0 bg-white xl:px-96 lg:px-60 md:px-48 py-8 font-bold hidden md:block z-50"
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
          {/* <button>
            <svg className="w-7 h-7 m-3" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          </button> */}
        </div>
        <div id="modal" className="hidden">
            <div className="bg-white absolute font-bold text-3xl">
                <div className="grid mr-96 py-80 ml-3 -mt-20">
                  <Link smooth to="#intro" className="text-3xl w-44" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.home">Home</Trans>
                  </Link>
                  <Link smooth to="#about" className="mt-4" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.about">About Me</Trans>
                  </Link>
                  <Link smooth to="#skills" className="mt-4" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.skills">Skills</Trans>
                  </Link>
                  <Link smooth to="#projects" className="mt-4" onClick={() => onToggle()}>
                    <Trans i18nKey="nav.projects">Projects</Trans>
                  </Link>
                  <Link smooth to="#contact" className="mt-4" onClick={() => onToggle()}>
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
