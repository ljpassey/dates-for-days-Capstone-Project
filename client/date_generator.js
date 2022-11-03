const dateCreateForm = document.getElementById('dateCreateForm')
const dateTitle = document.getElementById('dateTitle')
const dateDescription = document.getElementById('dateDescription')
const dateContainer = document.getElementById('dateContainer')
const formSubmit = document.getElementById('formSubmit')

// function dateCreateFormSubmit() {
    
// }


function createDateCard() {
    
    let body = {
        date_title: dateTitle.value,
        date_description: dateDescription.value
    }

    dateContainer.innerHTML = ''

    

    

    axios.post('http://localhost:4004/date/', body)
        .then(res => {
            console.log('it worked')
            
            res.data.forEach(elem => {
                 newDateCard = 
                 `<div class="customDateCard">
                    <h1>${elem.date_title}</h1>
                    <br>
                    <h3>${elem.date_description}</h3>
                </div>`

                dateContainer.innerHTML += newDateCard
        })
        .catch(err => console.log(err))
    })
}

formSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    createDateCard()
})

// createDateCard()