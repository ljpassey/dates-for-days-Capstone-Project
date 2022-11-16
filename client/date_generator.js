const dateCreateForm = document.getElementById('dateCreateForm')
const dateTitle = document.getElementById('dateTitle')
const dateDescription = document.getElementById('dateDescription')
const dateContainer = document.getElementById('dateContainer')
const formSubmit = document.getElementById('formSubmit')
const deleteBtn = document.getElementById('deleteBtn')
const spanId = document.getElementById('customDateCard')

const email = window.localStorage.getItem('email')

function addDate() {

    let body = {
    date_title: dateTitle.value,
    date_description: dateDescription.value,
    email: email
}

    dateContainer.innerHTML = ''

    axios.post('/date', body)
        .then(res => {
            console.log('it worked')
            console.log(email)
            res.data.forEach(elem => {
                 newDateCard = 
                 `<span id="customDateCard">
                    <h1>${elem.date_title}</h1>
                    <br>
                    <h3>${elem.date_description}</h3>
                    <br>
                    <h6>${elem.created_by}</h6>
                    <button id="deleteBtn">Delete</button>
                </span>`

                dateContainer.innerHTML += newDateCard
            })
        })
}

function deleteDateIdea(date_id) {
    axios.delete(`/date/${date_id}`)
        .then(getUserCreatedDates())
        .catch(err => console.log(err))
}

function getUserCreatedDates() {

    let body = {
    date_title: dateTitle.value,
    date_description: dateDescription.value,
    email: email
    }

    axios.post('/userCreatedDates', body)
        .then(res => {
            console.log("success")
            console.log(res.data)
            res.data.forEach(elem => {
                 newDateCard = 
                 `<div class="customDateCard" id="${elem.date_id}">
                    <h1>${elem.date_title}</h1>
                    <br>
                    <h3>${elem.date_description}</h3>
                    <br>
                    <h6>${elem.created_by}</h6>
                    <button onclick="deleteDateIdea(${elem.date_id});refreshPage()">Delete</button>
                </div>`
            dateContainer.innerHTML += newDateCard
        })
    })
}

function refreshPage(){
    window.location.reload()
    console.log("page refreshed");
} 

formSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    addDate()
    refreshPage()
})

getUserCreatedDates()



