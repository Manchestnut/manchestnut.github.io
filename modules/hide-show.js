const hideShowApp = document.getElementsByClassName('hide-show')

function hideShow(event) {
    const hideShowButton = event.target;
    
    if (hideShowButton.classList.contains('hide-show')) {
        const parentCard = hideShowButton.closest('.card');
        const title = parentCard.querySelector('h2').innerText;
        const cardContent = parentCard.querySelector('.content');

        const computedStyle = getComputedStyle(cardContent)

        if (computedStyle.display === 'block') {
            cardContent.style.display = 'none';
            hideShowButton.innerText = title;
        } else {
            cardContent.style.display = 'block';
            hideShowButton.innerText = 'Hide';
        }
    }
}

function hideShowMain() {
    for (let i = 0; i < hideShowApp.length; i++) {
        hideShowApp[i].addEventListener('click', hideShow)
    }
}

export default hideShowMain