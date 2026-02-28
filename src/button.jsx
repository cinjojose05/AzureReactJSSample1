import "./App.css";

function Button() {
    const handleClick = async () => {
        await fetchData();  
  };
    return (
        <button className="btn" onClick={handleClick}>Get Customer Details</button>
    );
}

async function fetchData() {
  try {
    // const url = 'https://azurenodejssample1-h3ahaja4gpfyd9aq.centralus-01.azurewebsites.net/api/customers';
    // const response = await fetch(url);
    // const data = await response.json();
    alert('Test');
    // console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default Button;