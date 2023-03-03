const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img} alt="" />
            <h5>{props.title}</h5>

            <p>{props.description.substring(0, 150) + " ..."}</p>
            <a href="g">...بیشتر</a >
        </div>
    );
}

export default Card;