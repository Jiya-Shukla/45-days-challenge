function getQuote() {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const errorMessage = document.getElementById('error-message');

  
  quoteAuthor.textContent = '';
  errorMessage.textContent = '';

  fetch('https://api.quotable.io/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `– ${data.author}`;
    })
    .catch(error => {
      quoteText.textContent = '';
      quoteAuthor.textContent = '';
     
      
    });
}

document.getElementById('new-quote-btn').addEventListener('click', getQuote);
getQuote(); // Load initial quote