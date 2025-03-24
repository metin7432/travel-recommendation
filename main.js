
const btnSearch = document.getElementById("btnSearch");
const popupHeader = document.getElementById("popupHeader");
const popupImg = document.getElementById("popup-image");
const popup = document.getElementById("popup")
const time = document.getElementById("time");
popup.setAttribute("id", "popup")
popup.innerHTML = '';




function searchRecommmendation() {
    const popup = document.getElementById("popup");
    popup.style.cssText = "visibility: visible;";
    const input = document.querySelector('.search-input').value.toLowerCase();
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(result => {
        
      const filter = result.countries.find(item => {
       return item.name.toLowerCase() === input
      });
        filter.cities.forEach(element => {
            popup.innerHTML += `<div class="popup-item">
            <img src="images/${element.imageUrl}" class="popup-image">
            <div class="popup-item-backgroud">
            <h1 class="popup-image-header">${element.name}</h1> 
            <p class="popup-item-subtext">${element.description}</p>
            <button class="popup-item-btn">Visit</button> </div></div>`
           });
        
        
    })

   
}

btnSearch.addEventListener("click", searchRecommmendation)

function resetForm() {
    document.querySelector('.search-input').value = "";
    const popup = document.getElementById("popup");
    popup.style.cssText = "visibility: hidden;"
    window.location.reload();
    
   
  }

 const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", resetForm);

  const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const newYorkTime = new Date().toLocaleTimeString('en-US', options);
  time.innerHTML = `Current time in New York: ${newYorkTime}`;