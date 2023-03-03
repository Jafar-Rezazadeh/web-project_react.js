const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img} alt="" />
            <h5>{props.title}</h5>

            <p>{props.description.substring(0, 50) + " ..."}</p>
            <a href="g">GitHub</a >
        </div>
    );
}

export default Card;