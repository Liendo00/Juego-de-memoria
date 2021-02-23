document.addEventListener('DOMContentLoaded', ()=>{

    // CARD OPTIONS 

    const cardArray = [
        {
            name:'pikachu',
            img:'imagenes/pikachu.png'
        },
      
        {
            name:'bullbasaur',
            img:'imagenes/bullbasaur.png'
        },
      
        {
            name:'squirtle',
            img:'imagenes/squirtle.png'
        },
      
       
        {
            name:'charmander',
            img:'imagenes/charmander.png'
        },
      
        {
            name:'jigglypuff',
            img:'imagenes/jigglypuff.png'
        },
        {
            name:'meowth',
            img:'imagenes/meowth.png'
        },
       
        {
            name:'eevee',
            img:'imagenes/eevee.png'
        },
       
        
        {
            name:'psyduck',
            img:'imagenes/psyduck.png'
        },
        {
            name:'pikachu',
            img:'imagenes/pikachu.png'
        },
      
        {
            name:'bullbasaur',
            img:'imagenes/bullbasaur.png'
        },
      
        {
            name:'squirtle',
            img:'imagenes/squirtle.png'
        },
      
       
        {
            name:'charmander',
            img:'imagenes/charmander.png'
        },
      
        {
            name:'jigglypuff',
            img:'imagenes/jigglypuff.png'
        },
        {
            name:'meowth',
            img:'imagenes/meowth.png'
        },
       
        {
            name:'eevee',
            img:'imagenes/eevee.png'
        },
       
        
        {
            name:'psyduck',
            img:'imagenes/psyduck.png'
        }


    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    // CREATE YOUR BOARD

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'imagenes/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // CHECK FOR MATCHES 
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'imagenes/blank.png')
            cards[optionTwoId].setAttribute('src', 'imagenes/blank.png')
            alert("Encontraste un par")
        } 
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert("Encontraste un par")
            cards[optionOneId].setAttribute('src', 'imagenes/white.png')
            cards[optionTwoId].setAttribute('src', 'imagenes/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'imagenes/blank.png')
            cards[optionTwoId].setAttribute('src', 'imagenes/blank.png')
            alert('Lo siento, vuelve a intentarlo')
        }
        cardsChosen = []
        cardsChosenId = [] 
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
         resultDisplay.textContent = '¡Felicitaciones! Encontraste todas las parejas!'
        }
    }


    // FLIP YOUR CARD
    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length ===2){
            setTimeout(checkForMatch, 500)
        }

    }

    createBoard()

})