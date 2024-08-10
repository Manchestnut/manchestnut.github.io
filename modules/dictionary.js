
async function dictionary() {
    const dictionaryInput = document.getElementById('dictionary-input');
    const dictionaryDisplay = document.getElementById('dictionary-display');
    const inputValue = dictionaryInput.value;
    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`

    try {
        const response = await fetch(dictionaryApiUrl)
        if(!response.ok) {
            throw new Error(response.status)
        }
        const data = await response.json()

        dictionaryDisplay.replaceChildren(); // removes previous definitions

        // Get and display parts of speech (e.g., noun, verb)
        for(let i = 0; i < data[0].meanings.length; i++) {
            const partsOfSpeech = data[0].meanings[i].partOfSpeech
            const pElement = document.createElement('p');
            pElement.innerHTML = `<b>${partsOfSpeech.toUpperCase()}</b>`
            dictionaryDisplay.appendChild(pElement)

            // Get and display definitions for each parts of speech
            for(let n = 0; n < data[0].meanings[i].definitions.length; n++){
                const definition = data[0].meanings[i].definitions[n]
                const pElement = document.createElement('p');
                pElement.textContent = `${n + 1}. ${definition.definition}`
                dictionaryDisplay.appendChild(pElement)
            }
        }
    } 
    catch (error) {
        if(error.message === '404') {
            dictionaryDisplay.innerHTML = '<p class="warning">Word not found.</p>'
        }
        console.error(error)
    }
}


function dictionaryMain() {
    const button = document.getElementById('dictionary-button');
    button.addEventListener('click', dictionary);
}

export default dictionaryMain