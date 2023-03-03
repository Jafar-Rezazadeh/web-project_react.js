import ProgressBar from '../Components/ProgressBar';
import { motion, useInView } from 'framer-motion';
import Card from '../Components/Card';
import About from '../Components/About';

// * images
import buildsoftapp from '../images/buildsoftapp.png'
import react_buildsoftapp from '../images/reactBuildsoftapp.JPG'
import kabinetfroshy from '../images/kabinetFroshy.JPG'

import slidebar_img from '../images/1.gif'
import skillsImg from '../images/skills-img.jpg'
import { useRef } from 'react';




const Home = () => {

    //*variables
    const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae illo nisi, modi maxime, pariatur quo eveniet iste accusamus eaque alias omnis error molestiae natus dolorem ratione. Id, eveniet ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae illo nisi, modi maxime, pariatur quo eveniet iste accusamus eaque alias omnis error molestiae natus dolorem ratione. Id, eveniet ab!';
    const skillRef = useRef(null)
    const isSkillsInView = useInView(skillRef)
    const projectsRef = useRef(null)
    const isProjectsInView = useInView(projectsRef)
    const aboutRef = useRef(null)
    const isaboutInView = useInView(aboutRef)

    //* variants
    const progressBarvariant = {
        hidden: {
            opacity: 0,
            translateY: '-100%',
        },
        visible: {
            opacity: 1,
            translateY: 0,

        },

    }

    return (
        <motion.div className="Home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }}
        >
            {/* //* slide bar */}
            <motion.div className="slidebar"
            >

                <div className='contents'>
                    <h1>از ما غیرممکن‌ها را انتظار داشته باشید!</h1>
                    <h4>ساخت انواع نرم افزار در پلتفرم های مختلف</h4>
                </div>
                <img src={slidebar_img} alt="" />

            </motion.div>

            {/* //* skills */}
            <motion.div className="skills"
                ref={skillRef}
            >
                {isSkillsInView &&
                    <motion.div className='container-skill'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="progreses" >
                            <h4>سطح برنامه نویسی در FrameWork های مختلف</h4>
                            <motion.div
                                variants={progressBarvariant}
                                initial='hidden'
                                animate='visible'
                                transition={{ type: 'spring', stiffness: 110, delay: 0.2 }}
                            >
                                <ProgressBar val={70} name='Flutter' />
                            </motion.div>

                            <motion.div
                                variants={progressBarvariant}
                                initial='hidden'
                                animate='visible'
                                transition={{ type: 'spring', stiffness: 110, delay: 0.6 }}
                            >
                                <ProgressBar val={60} name='React.js' />
                            </motion.div>

                            <motion.div
                                variants={progressBarvariant}
                                initial='hidden'
                                animate='visible'
                                transition={{ type: 'spring', stiffness: 110, delay: 0.9 }}
                            >
                                <ProgressBar val={40} name='Vue.js' />
                            </motion.div>
                        </div>
                        <img src={skillsImg} alt="" />
                    </motion.div>
                }

            </motion.div>

            {/* //* projects */}
            <div className='projects'
                ref={projectsRef}>
                {isProjectsInView &&
                    <div className="container-projects">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            پروژه های متن باز</motion.h3>

                        <motion.div className="projectCards"
                            initial={{ scale: 0.3, }}
                            animate={{ scale: 1, }}
                            transition={{ duration: 1, delay: 0.4, }}
                        >
                            <motion.div
                                initial={{ y: '100vh' }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.45, duration: 1.5, type: 'spring', stiffness: 110 }}
                            >
                                <Card title='Vue-buildsoftapp.ir' description="نرم افزار وب، ساخته شده با فریم ورک(vue.js)" img={buildsoftapp} />
                                <Card title='React-buildsoftapp.ir' description="نرم افزار وب، ساخته شده با فریم ورک(react.js)" img={react_buildsoftapp} />
                                <Card title='Flutter-kabinet-foroshy' description="نرم افزار ویندوز، ساخته شده با فریم ورک(Flutter)" img={kabinetfroshy} />
                            </motion.div>
                        </motion.div>
                    </div>
                }

            </div>
            {/* // *about */}
            <div className="about"
                ref={aboutRef}>
                {isaboutInView &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <About txt={lorem} />
                    </motion.div>
                }
            </div>


        </motion.div>
    );
}

export default Home;