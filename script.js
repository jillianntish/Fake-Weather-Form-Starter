//select the html form
const form = document.querySelector('form')

//select input text from the dom,
let cityTxt = document.getElementById('city')

// then store it as a variable
let cityUpdate = cityTxt.value

//that can later be updated on the triggered event
cityTxt.addEventListener('input', function(e){
  //update the name of the city to the input box's value
  cityUpdate = e.target.value;
})

//print submitted to tthe console
// form.addEventListener('submit', function(e){
//   //prevent the page from refreshing
//   e.preventDefault();
//   axios.get(`http://localhost:3000/weather?city=${cityUpdate}`)
//   .then(response => console.log(response.data))
//   .catch(err => console.log('aw snap', err))
//   //console log the city
//   console.log(`I love ${cityUpdate}!`)
//   //reset the form data
//   cityTxt.value = '';
// })

form.addEventListener('submit', function(e){
  //prevent the page from refreshing
  e.preventDefault();
  axios.get(`http://localhost:3000/weather?city=${cityUpdate}`)
  .then((response) => {
    let city = document.querySelector('.cityName');
    let cels = document.querySelector('.celsius');
    let fahr = document.querySelector('.fahrenheit');
    let errMsg = document.querySelector('error-message')

    if(response.data.city){
      city.innerHTML = 'City: ' + response.data.city;
      cels.innerHTML = 'Temp (C): ' + response.data['temperature (C)'];
      fahr.innerHTML = 'Temp (F): ' + response.data['temperature (F)'];
    } else {
    errMsg.innerHTML = 'Sorry about that pal, that city is nowhere in our database'
    }
  })
  .catch(err => console.log('aw snap', err))
  //console log the city
  console.log(`I love ${cityUpdate}!`)
  //reset the form data
  cityTxt.value = '';
})