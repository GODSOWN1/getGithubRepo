import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';


// The main function Component that renders the entire application
function App() {
  return (
    <div className="App">
      <h3 style= {{Color:"#293250"}}> Github Repository Search</h3>
      <SearchBar />
      
    </div>
  );
}

export default App;
