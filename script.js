const createdeck = document.getElementById("Create-Deck-Button")
const deckscontainer = document.getElementById("decks")
createdeck.addEventListener("click", () => {
    const newdeck =  document.createElement("div")
    newdeck.classList.add("deck")
    const newdecktitle =  document.createElement("h1")
    newdecktitle.classList.add("decktitle")
    newdecktitle.innerHTML = "Untitled Deck"
    newdecktitle.contentEditable = "true"
      newdeck.appendChild(newdecktitle)
  deckscontainer.prepend(newdeck)
})