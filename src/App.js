import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card img={"https://netology-code.github.io/html-2-diploma/sources/images/last-post2.jpg"}>
          <h5 className="card-title">The Principles Of Scientific Cooking</h5>
          <p className="card-text">If you're shy about going out alone, bring a book or a journal at first, and take small steps to get comfortable with the feeling.</p>
          <button className="btn btn-primary">Go somewhere</button>
      </Card>
      <Card img={"https://netology-code.github.io/html-2-diploma/sources/images/last-post3.jpg"}>
          <h5 className="card-title">How To Meet That Special Someone</h5>
          <p className="card-text">Once upon a time, in an age before the Internet, the only way to meet people was to leave your home and interact with humanity.</p>
          <button className="btn btn-primary">Go somewhere</button>
      </Card>
      <Card>
          <h5 className="card-title">Barbecue Party Tips For A Truly Amazing Event</h5>
          <p className="card-text">Considering how long the human race existed before online dating, it looks like meeting people in real life was really working for them.</p>
          <button className="btn btn-primary">Go somewhere</button>
      </Card>
    </div>
  );
}

export default App;
