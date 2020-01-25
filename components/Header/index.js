// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	
	// Create the Elements
	const headDiv = document.createElement('div');
	const spanDate = document.createElement('span');
	const title = document.createElement('h1');
	const spanTemp = document.createElement('span');
	
	// Append the Elements
	headDiv.appendChild(spanDate);
	headDiv.appendChild(title);
	headDiv.appendChild(spanTemp);
	
	// Set the Class List
	headDiv.classList.add('header');
	spanDate.classList.add('date');
	spanTemp.classList.add('temp');
	
	// Add Content
	spanDate.textContent = "SMARCH 28, 2019";
	title.textContent = "Lambda Times";
	spanTemp.textContent = "98°";
	
	return headDiv // returns the Header component
}

const heading = document.querySelector('.header-container');
heading.appendChild(Header());


