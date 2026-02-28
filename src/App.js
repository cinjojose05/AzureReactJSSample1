import './App.css';
import Button from './button';
import CustCard from './custcard';

import React, {useState, useEffect} from 'react';

function App() {

  const [customerData, setCustomerData] = useState([]);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const url = 'https://azurenodejssample1-h3ahaja4gpfyd9aq.centralus-01.azurewebsites.net/api/customers';
        const response = await fetch(url);
        const data = await response.json();
        setCustomerData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  } , []);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button/>
            <div className="card-container">
              {customerData.map((customer, index) => (
                //console.log(customer),
                <CustCard key={index} fname={customer.FirstName} lname={customer.LastName} city={customer.City} />
              ))}
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
