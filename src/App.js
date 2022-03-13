import './App.css';
import Note from './Note'
import {useState, useEffect} from 'react' 



function App() {
  const [quotes, setQuotes] = useState(null)

  useEffect(() => fetch('http://localhost:8000/quotes')
  .then(res => res.json())
  .then(data => setQuotes(data)) , [])
  
  return (
    <div className="App">
      {quotes && <Note  quotes={quotes}/>}
      
    </div>
  );
}

export default App;
