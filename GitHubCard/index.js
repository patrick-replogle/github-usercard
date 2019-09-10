/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/patrick-replogle')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error);
    console.log('there was an error')
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function cardMaker(data) {
  let card = document.createElement('div')
  card.classList.add('card')

  let img = document.createElement('img')
  img.setAttribute(src, data.avatar_url)
  card.appendChild(img)

  let div = document.createElement('div')
  div.classList.add('card-info')
  card.appendChild(div)

  let h3 = document.createElement('h3')
  h3.classList.add('name')
  h3.textContent = `${data.name}`
  div.appendChild(h3)

  let p1 = document.createElement('p')
  p1.classList.add('username')
  p1.textContent = `${data.login}`
  div.appendChild(p1)

  let p2 = document.createElement('p')
  p2.textContent = `Location: ${data.location}`
  div.appendChild(p2)

  let p3 = document.createElement('p')
  p3.textContent = `Profile: `
  let a = document.createElement('a');
  a.setAttribute(href, data.html_url)
  a.setAttribute(alt, 'address to user\'s github page')
  p3.appendChild('a')
  div.appendChild(p3);

  let p4 = document.createElement('p')
  p4.textContent = `Followers: ${data.followers}`
  div.appendChild(p4)

  let p5 = document.createElement('p')
  p5.textContent = `Following: ${data.following}`
  div.appendChild(p5)

  let p6 = document.createElement('p')
  p6.textContent = `Bio: ${data.bio}`
  div.appendChild(p6)

  return card;

}
console.log(cardMaker)