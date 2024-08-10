const random_number = Math.floor(Math.random() * 100 + 1)
console.log(random_number)
let counter = true
let StartGame = true

if(StartGame){
document.querySelector(".label_submit").addEventListener('click',(e)=>{
    e.preventDefault()
    let StartGame = true
    const number = document.querySelector('.label_input').value
    const num  = Number(document.querySelector('#guesses-left').innerText)
    if(StartGame)
    {
        if(NumberCheck(number))
        {
            document.querySelector('.results').innerHTML = "Please enter a valid Number"
        }
        else
        {
        CompareNumber(number) 
        }
    }

})
}
function NumberCheck(number)
{
    if(number <= 0 || number >= 101 || isNaN(number))
    {
        return true
    }
    else
    {
        return false
    }
}
function CompareNumber(number)
{
    if(number > random_number)
    {
        document.querySelector('.results').innerHTML = 'Number is too Low'
    }
    else if(number < random_number)
    {
        document.querySelector('.results').innerHTML = 'Number is too High'
    }
    else
    {
        document.querySelector('.results').innerHTML = `Your Number is correct - The Number is ${number}`
        document.querySelector('.label_input').disabled = true
        document.querySelector('.label_submit').disabled = true
        const new_element = document.createElement('button')
        new_element.innerText = 'Start a New Game'
        new_element.style.width = '200px'
        new_element.style.flex = '0 0 auto'
        new_element.style.paddingBlock = '10px'
        new_element.style.value = 'Refresh Page'
        new_element.style.onclick = 'refresh'
        new_element.setAttribute('id','new_game')
        document.querySelector('.guess-stats').appendChild(new_element)
        document.querySelector('#new_game').addEventListener('click',()=>{
            window.location.reload()
            const new_element = document.querySelector('#new_game')
            new_element.remove()
        })
    }
    document.querySelector('.label_input').value = ''
    ChangeStatus(number)
}
function ChangeStatus(number)
{
    const num  = Number(document.querySelector('#guesses-left').innerText)
    if(num > 1)
    {
        document.querySelector('#guesses-left').innerHTML = `${num-1}`
        document.querySelector('#prev-guess').innerHTML += `${number}, `
    }
    else if(num == 1)
    {
        document.querySelector('#guesses-left').innerHTML = `${num-1}`
        document.querySelector('#prev-guess').innerHTML += `${number}, `
        document.querySelector('.label_input').disabled = true
        document.querySelector('.label_submit').disabled = true
        document.querySelector('.results').innerHTML = 'Game is Over'
        const new_element = document.createElement('button')
        new_element.innerText = 'Start a New Game'
        new_element.style.width = '200px'
        new_element.style.flex = '0 0 auto'
        new_element.style.paddingBlock = '10px'
        new_element.style.value = 'Refresh Page'
        new_element.style.onclick = 'refresh'
        new_element.setAttribute('id','new_game')
        document.querySelector('.guess-stats').appendChild(new_element)
        document.querySelector('#new_game').addEventListener('click',()=>{
            window.location.reload()
            const new_element = document.querySelector('#new_game')
            new_element.remove()
        })
    }
}
