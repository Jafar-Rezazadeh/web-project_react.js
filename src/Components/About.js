import telegram from '../images/icons/telegram.png'
import gmail from '../images/icons/gmail.png'
import github from '../images/icons/github.png'
const About = (props) => {
    return (
        <div className="about-bg">
            <h4>درباره ما</h4>
            <p>{props.txt}</p>
            <ul>
                <li><a href="https://t.me/jafar_rzzd" target={'_blank'} rel="noreferrer">
                    <img src={telegram} alt="" />
                </a></li>

                <li><a href="https://github.com/Jafar-Rezazadeh" target={'_blank'} rel="noreferrer">
                    <img src={github} alt="" />
                </a></li>

                <li><a href="https://jafarrezazadeh76@gmail.com" target={'_blank'} rel="noreferrer">
                    <img src={gmail} alt="" />
                </a></li>
            </ul>
        </div>
    );
}

export default About;