import landscapeImg from '../images/landscape.jpeg'

const projects = {
    opensourcerw: { name: 'Open Source Rwanda', img: landscapeImg,  link: 'nestjs'},
    kivunoir: { name: 'Kivu Noir', img: landscapeImg, link: 'widadf'},
};

const Project = () => {
    return (
        <div id='project'>
            {Object.keys(projects).map((project) => (
                <div key={project} className='mt-10 md:mr-28 md:ml-28 md:mb-8 xl:mr-80 xl:ml-80'>
                    <div className='border-2 border-gray'>
                        <img src={projects[project].img} alt={projects[project].name} className=''/>
                    </div>
                    <p className='mt-5 underline'>
                        <a href={projects[project].link} target='_blank' rel="noreferrer">{projects[project].name}</a>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Project
