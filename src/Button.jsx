const Button = (props) => {
    return(
        <button onClick={props.onPress}>{props.text}</button>
    )
}

export default Button;