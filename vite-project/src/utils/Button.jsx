import "./Button.css"
const Button = ({ buttonName }) => {
    return (
        <button className="primaryBtn">
            {buttonName}
        </button>
    )
}

export default Button