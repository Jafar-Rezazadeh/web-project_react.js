import { motion } from "framer-motion";
const PageNotFound = () => {
    return (
        <motion.div className="PageNotFound"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h3>Page Not Found !</h3>
        </motion.div>

    );
}

export default PageNotFound;