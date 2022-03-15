function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid
    playerConfigOverlay.style.display = "block"
    backdrop.style.display = "block"
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = "none"
    backdrop.style.display = "none"
    formElement.firstElementChild.classList.remove("error")
    errorsOutput.textContent = ""
    formElement.firstElementChild.lastElementChild.value = ""
}

function savePlayerConfig(event){
    event.preventDefault()
    let formData = new FormData(event.target)
    let enteredPlayerName = formData.get("playername").trim()

    if (!enteredPlayerName){
        event.target.firstElementChild.classList.add("error")
        errorsOutput.textContent = "Please enter a valid name!"
        return
    }

    const updatedPlayerData = document.getElementById("player-" + editedPlayer + "-data")
    updatedPlayerData.children[1].textContent = enteredPlayerName

    players[editedPlayer - 1].name = enteredPlayerName

    closePlayerConfig()
}