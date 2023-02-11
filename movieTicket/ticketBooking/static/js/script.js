const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();


// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
  
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
    console.log(selectedMovieIndex)
  }
}
console.log(populateUI())
// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = 199; //sum of total ticket price
  setMovieData(e.target.selectedIndex, e.target.value);//  selected optionindex and value(movie-name)
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

function checkout()
{ 
  if(count.innerHTML > 0)
{
  document.getElementById("checkout").innerHTML='<i class="fa fa-spinner fa-spin"></i>"Booking"';
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  const para=JSON.stringify({'movie':movieSelect.value,'Seats':seatsIndex, 'price': ticketPrice})
  setTimeout(() => { window.location.href='bookings/'+para}, 5000);
}
}

// function sold()
// {
  
//   {% for booking in bookings %}
//   if (booking.S_No == 

// }
// Initial count and total set
updateSelectedCount();