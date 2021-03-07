fetch("./hotel.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data))


// fetch("./restaurant.json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data))

