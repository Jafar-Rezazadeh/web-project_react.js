import contactUsImage from '../images/map.jpg'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const ContactUs = () => {

    const [isSubmitted, setisSubmitted] = useState(false);

    // * functions
    const handleSubmit = (e) => {
        e.preventDefault()
        setisSubmitted(true)
    }
    // * redirect
    const redirecting = () => {
        setisSubmitted(false)
    }

    return (
        <motion.div className="contact-us"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <AnimatePresence mode='wait'>
                {!isSubmitted &&
                    <motion.div className="container-contact-us"
                        key="0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}

                    >

                        <div style={{ textAlign: 'center' }}>
                            <h2>تماس با ما</h2>
                            <p>یه پیام برای ما بزار:</p>
                        </div>

                        <div className="row-contact-us">
                            <div className="column-contact-us">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="fname">نام</label>
                                    <input type="text" id="fname" name="firstname" placeholder="نام شما.." required />
                                    <label htmlFor="lname">نام خانوادگی</label>
                                    <input type="text" id="lname" name="lastname" placeholder="نام خانوادگی شما.." required />
                                    <label htmlFor="country">کشور</label>
                                    <select id="country" name="country">
                                        <option value="iran">ایران</option>
                                        <option value="australia">دیگر...</option>
                                    </select>
                                    <label htmlFor="subject">متن</label>
                                    <textarea id="subject" name="subject" placeholder="چیزی بنویس..." style={{ height: '170px' }} required></textarea>
                                    <button >ثبت</button>
                                </form>
                            </div>

                            <div className="column-contact-us">
                                <img src={contactUsImage} alt="" style={{
                                    width: "100%"
                                }}></img>
                            </div>
                        </div>
                    </motion.div>
                }


                {/* //* if submitted */}

                {isSubmitted &&
                    <motion.div className="handleSubmit"
                        key="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>نظر شما ثبت شد.</h2>
                        <button onClick={redirecting}>بازگشت</button>
                    </motion.div>
                }
            </AnimatePresence>



        </motion.div>

    );
}

export default ContactUs;