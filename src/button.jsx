import "./App.css";

function Button() {
    const handleClick = () => {
    alert('Cinjo clicked!');
  };
    return (
        <button className="btn" onClick={handleClick}>Get Customer Details</button>
    );
}

export default Button;