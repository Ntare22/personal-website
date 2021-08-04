import nestjs from '../images/nest.png';
import nodejs from '../images/node.png';
import reactjs from '../images/react.svg';
import postgres from '../images/postgres.svg';
import figma from '../images/figma.svg';
import flask from '../images/flask.png';

const skills = {
    nestjs: { name: 'NestJs', ratings: 3, img: nestjs},
    nodejs: { name: 'NodeJs', ratings: 4, img: nodejs},
    reactjs: { name: 'ReactJs', ratings: 4, img: reactjs},
    postgres: { name: 'Postgres', ratings: 4, img: postgres},
    figma: { name: 'Figma', ratings: 4, img: figma},
    flask: { name: 'Flask', ratings: 4, img: flask},
};

const Skill = () => {
    return (
        <div id='skill' className='flex flex-wrap justify-evenly gap-20'>
            {Object.keys(skills).map((skill) => (
                <div key={skill} className=''>
                    <div className='border-2 border-gray'>
                        <img src={skills[skill].img} alt={skills[skill].name} className='w-16 h-16 m-3'/>
                    </div>
                    <p className='mt-3'>{skills[skill].name}</p>
                </div>
            ))}
        </div>
    )
}

export default Skill
