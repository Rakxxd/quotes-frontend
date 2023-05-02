import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://quotes-api-uft6.onrender.com/quotes');
        console.log(response.data);
        setQuotes(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="app">
    <h1>QuotesLand</h1>

    {quotes?.length > 0 ? (
      <div className="container">
        {quotes.map((quote) => (
          <Cards quote={quote} />
        ))}
      </div>
    ) : (
      <div className="empty">
        <h2>No quotes found</h2>
      </div>
    )}
  </div>
  );
};

export default App;
