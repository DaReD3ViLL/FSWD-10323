/*
1. User Clicks on an option
2. Generate random computer option
3. Compare the two options
4. Display the winner
*/

/*
* Rock - 0
* Paper - 1
* Scissor - 2
*/

// Create a function with JS that generates a random response between 0-2 (inclusive)

const options = ["Rock", "Paper", "Scissor"]

const generateRandomResponse = ()=>(Math.random()*10).toFixed(0)%3

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const playerScoreContainer = document.querySelector('#player h1')
const compScoreContainer = document.querySelector('#computer h1')
const msgContainer = document.querySelector('.msg-box h1')

let playerScore = 0, compScore = 0;

rock.addEventListener('click', ()=>game(0))
paper.addEventListener('click', ()=>game(1))
scissor.addEventListener('click', ()=>game(2))

const game = (option)=>{
    const compResponse = generateRandomResponse()
    switch(option){
        case 0:
            switch(compResponse){
                case 0:
                    console.log('DRAW!')
                    rock.classList.add('draw')
                    setTimeout(()=>{
                        rock.classList.remove('draw')
                    },1000)
                    msgContainer.innerHTML = 'It Is A TIE!'
                    break;
                case 1:
                    console.log('COMPUTER WINS!')
                    rock.classList.add('incorrect')
                    setTimeout(()=>{
                        rock.classList.remove('incorrect')
                    },1000)
                    compScore++;
                    compScoreContainer.innerHTML = compScore;
                    msgContainer.innerHTML = `${options[compResponse]} beats ${options[option]}, Computer Wins!`
                    break;
                case 2:
                    console.log('YOU WIN!')
                    rock.classList.add('correct')
                    setTimeout(()=>{
                        rock.classList.remove('correct')
                    },1000)
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    msgContainer.innerHTML = `${options[option]} beats ${options[compResponse]}, YOU Win!`
                    break;
            }
            break;
        case 1:
            switch(compResponse){
                case 0:
                    console.log('YOU WIN!')
                    paper.classList.add('correct')
                    setTimeout(()=>{
                        paper.classList.remove('correct')
                    },1000)
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    msgContainer.innerHTML = `${options[option]} beats ${options[compResponse]}, YOU Win!`
                    break;
                case 1:
                    console.log("DRAW!")
                    paper.classList.add('draw')
                    setTimeout(()=>{
                        paper.classList.remove('draw')
                    },1000)
                    msgContainer.innerHTML = 'It Is A TIE!'
                    break;
                case 2:
                    console.log("COMPUTER WINS!")
                    paper.classList.add('incorrect')
                    setTimeout(()=>{
                        paper.classList.remove('incorrect')
                    },1000)
                    compScore++;
                    compScoreContainer.innerHTML = compScore;
                    msgContainer.innerHTML = `${options[compResponse]} beats ${options[option]}, Computer Wins!`
                    break;
            }
            break;
        case 2:
            switch(compResponse){
                case 0:
                    console.log("COMPUTER WINS!")
                    scissor.classList.add('incorrect')
                    setTimeout(()=>{
                        scissor.classList.remove('incorrect')
                    },1000)
                    compScore++;
                    compScoreContainer.innerHTML = compScore;
                    msgContainer.innerHTML = `${options[compResponse]} beats ${options[option]}, Computer Wins!`
                    break;
                case 1:
                    console.log("YOU WIN")
                    scissor.classList.add('correct')
                    setTimeout(()=>{
                        scissor.classList.remove('correct')
                    },1000)
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    msgContainer.innerHTML = `${options[option]} beats ${options[compResponse]}, YOU Win!`
                    break;
                case 2:
                    console.log('DRAW!')
                    scissor.classList.add('draw')
                    setTimeout(()=>{
                        scissor.classList.remove('draw')
                    },1000)
                    msgContainer.innerHTML = 'It Is A TIE!'
                    break;
            }
            break;
            default:
                break;
    }
}