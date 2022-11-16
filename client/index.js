const cardDiv = document.getElementById('cardDiv')
const dateBtn = document.getElementById('dateBtn')
const logoutBtn = document.getElementById('logoutBtn')

function getDateInfo() {

    cardDiv.innerHTML = ''

    axios.get('/date/')
        .then(res => {
            res.data.forEach(elem => {
                let dateCard = `
                    <h1>${elem.date_title}</h1>
                    <br>
                    <br>
                    <h3>${elem.date_description}</h3>
                `
                cardDiv.innerHTML += dateCard
            })
        })
        .catch(err => console.log(err))
}

function clearLocalStorage() {
    console.log()
    window.localStorage.removeItem('email')
}

dateBtn.addEventListener('click', getDateInfo)
logoutBtn.addEventListener('click', clearLocalStorage)