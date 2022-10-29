const cardDiv = document.getElementById('cardDiv')
const dateBtn = document.getElementById('dateBtn')


function getDateInfo() {
    cardDiv.innerHTML = ''

    axios.get('http://localhost:4004/date/')
        .then(res => {
            res.data.forEach(elem => {
                let dateCard = `
                    <h1>${elem.date_title}</h1>
                    <br>
                    <h3>${elem.date_description}</h3>
                  
                `
                cardDiv.innerHTML += dateCard
            })
        })
}

dateBtn.addEventListener('click', getDateInfo)