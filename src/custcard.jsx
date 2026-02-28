import "./App.css";

function CustCard(props) {
    return (
        <div className="card">
            <p>Customer Name: <b style={{color: "orange"}}>{props.fname} {props.lname}</b></p>
            <p>City: <b style={{color: "orange"}}>{props.city}</b></p>
        </div>
    );
}

export default CustCard;