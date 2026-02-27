import "./App.css";

function CustCard(props) {
    return (
        <div className="card">
            <h2>Customer Name: {props.fname} {props.lname}</h2>
            <p>City: {props.city}</p>
        </div>
    );
}

export default CustCard;