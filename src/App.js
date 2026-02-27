import './App.css';
import Button from './button';
import CustCard from './custcard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button/>
            <div className="card-container">
              <CustCard fname="John" lname="Doe" city="New York"/>
             <CustCard fname="Jane" lname="Smith" city="Los Angeles"/>
        </div>
        </div>
      
        
        
      </header>
    </div>
  );
}

export default App;
