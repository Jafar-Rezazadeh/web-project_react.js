import { motion } from "framer-motion";

const ProgressBar = (props) => {

    return (

        <div className="progressBarDiv">
            <motion.span className="progress__text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                {props.name} {props.val}%
            </motion.span>
            <motion.div className="progress__fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${props.val}%` }}
                transition={{ duration: 0.8, delay: 1.2, type: 'tween' }}
            >
            </motion.div>


        </div >
    );
}

export default ProgressBar;