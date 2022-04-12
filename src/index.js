import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

function App() {
  const [quote, setQuote] = useState({
    author: null,
    content: null
  })
  
  const fetchQuote = async () => {
    return await fetch('https://api.quotable.io/random')
      .then(response => response.json())
  }
  
  const handleGenerateQuote = async () => {
    setQuote(await fetchQuote())
  }

  useEffect(async () => {
    setQuote(await fetchQuote())
  }, [])


  return (
    <div id="quote-box">
      <div id="text">
        {quote.content}
      </div>
      <div id="author">
        {quote.author}
      </div>
      <button id="new-quote" onClick={handleGenerateQuote}>
        New Quote
      </button>
      <div id="tweet-quote">
        <a href="https://twitter.com/intent/tweet" target="_blank">Tweet Quote</a>
      </div>
   </div>
  );
  
}

ReactDOM.render(<App />, document.getElementById('root'));
