import "./App.css";

function CustCard(props) {
    return (
        <div className="card">
            <h3>Customer Name: {props.fname} {props.lname}</h3>
            <p>City: {props.city}</p>
        </div>
    );
}

export default CustCard;