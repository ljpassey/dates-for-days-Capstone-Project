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
        .then(() => {
            dateTitle.value=''
            dateDescription.value=''
            getUserCreatedDates()
        })
}

function deleteDateIdea(date_id) {
    axios.delete(`/date/${date_id}`)
        .then(() => getUserCreatedDates())
        .catch(err => console.log(err))
}

function getUserCreatedDates() {

    dateContainer.innerHTML = ''

    axios.get('/userCreatedDates')
        .then(res => {
            const token = window.localStorage.getItem('email')
            res.data.forEach(elem => {
                if (elem.created_by === token) {
                    let newDateCard = 
                        `<div class="customDateCard" id="${elem.date_id}">
                            <h1>${elem.date_title}</h1>
                            <br>
                            <h3>${elem.date_description}</h3>
                            <br>
                            <button id="deleteBtn" onclick="deleteDateIdea(${elem.date_id})">Delete</button>
                        </div>`

                        dateContainer.innerHTML += newDateCard
                }
        })
    })
}

formSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    if (dateTitle.value.length === 0) {
        alert("Date Title is required")
    } else if (dateDescription.value.length === 0) {
        alert("Date Description is required")
    } else {
        addDate()
    }
})

getUserCreatedDates()



