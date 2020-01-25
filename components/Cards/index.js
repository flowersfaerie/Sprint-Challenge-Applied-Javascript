// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsEntry = document.querySelector('.cards-container');

function cardsPanel(data) {
	
	//Create the Elements
	const cards = document.createElement('div');
	const headLine = document.createElement('div');
	const auth = document.createElement('div');
	const imgCont = document.createElement('div');
	const authImg = document.createElement('img');
	const authSpan = document.createElement('span');
	
	// Append the Elements
	cards.appendChild(headLine);
	cards.appendChild(auth);
	auth.appendChild(imgCont);
	imgCont.appendChild(authImg);
	auth.appendChild(authSpan);
	
	// Set Class List
	cards.classList.add('card');
	headLine.classList.add('headline');
	auth.classList.add('author');
	imgCont.classList.add('img-container');
	
	// Add Content
	headLine.textContent = data.articles;
	authImg.src = data.articles;
	authSpan.textContent = data.articles;
	
	return cards // Returns the Cards component
}

axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then(response => {
		console.log(response);
	response.data.topics.forEach(item => {
			const topics = tabComponent(item);
			topicsEntry.appendChild(topics);
		});
	})
	.catch(error => {
		console.log(error);
	})