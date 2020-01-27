// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topicsEntry = document.querySelector('.topics');

axios
	.get('https://lambda-times-backend.herokuapp.com/topics')
	.then(response => {
		// Do something with the data
//		console.log(response);	
		response.data.topics.forEach(item => {
			const topics = tabComponent(item);
			topicsEntry.appendChild(topics);
		});
	})
	.catch(function (error) {
		console.log(error);
	});

function tabComponent(data) {
	let topicTab = document.createElement('div');
	topicTab.classList.add('tab');
	topicTab.textContent = `${data.topics}`;

	return topicTab;
}