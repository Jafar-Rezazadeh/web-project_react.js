import blank_img from "../images/blank.jpg"
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <motion.div className="about-us"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 style={{ textAlign: "center" }}>تیم ما</h2>
            <div className="row-aboutUs">
                <div className="column-aboutUs">

                    <div className="card-aboutUs">
                        <img src={blank_img} alt="Jane" style={{ width: '50%' }}></img>
                        <div className="container-aboutUs">
                            <h2>جعفر رضازاده</h2>
                            <p className="title-aboutUs">برنامه نویس</p>
                            <p> فارغ التحصیل رشته نرم افزار کامپیوتر بشدت علاقمند به برنامه نویسی با فریم ورک های مختلف</p>
                            <p>jafarRezazadeh76@gmail.com</p>
                            <a href="http://jafarrezazadeh76@gmail.com" target="_blank" rel="noopener noreferrer"><p><button className="button-aboutUs">گفتگو</button></p></a>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default AboutUs;
