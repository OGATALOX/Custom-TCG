

window.addEventListener("DOMContentLoaded", () => {

const createdeck = document.getElementById("Create-Deck-Button")
const deckscontainer = document.getElementById("decks")

if (createdeck && deckscontainer) {


createdeck.addEventListener("click", () => {
  
    const newdeck =  document.createElement("div")
    newdeck.classList.add("deck")
    const newdecktitle =  document.createElement("h1")
    newdecktitle.classList.add("decktitle")
    newdecktitle.innerHTML = "Untitled Deck"
    newdecktitle.contentEditable = "true"
      newdeck.appendChild(newdecktitle)
  deckscontainer.prepend(newdeck)
  
  newdeck.addEventListener("click", (event) => {
    if (event.target.classList.contains("decktitle")) {
      return
    }
  localStorage.setItem("DeckTitle", newdecktitle.innerHTML)
  window.location.href = "deck.html"
})
})
}


  const deck_title = localStorage.getItem("DeckTitle")
  const deck_page_title = document.getElementById("Deck-page-Title")

  if (deck_title && deck_page_title) {
deck_page_title.innerHTML = deck_title
deck_page_title.contentEditable = "true"
    document.getElementById("go-back").onclick = function(){
            window.location.href = "index.html";

        };
  }

const create_card_button = document.getElementById("Create-Card-Button");
  create_card_button.addEventListener("click", () => {
    
  })

  
})