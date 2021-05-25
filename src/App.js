import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Cat from './Cat';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Link to="/cat">Visit our cat!</Link>
      <Route path="/cat" component={Cat} />
    </div>
    </Router>
  );
}

export default App;
