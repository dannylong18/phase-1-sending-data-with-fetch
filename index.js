// Add your code here
function submitData (userName, userEmail) {
return fetch ('http://localhost:3000/users', {
    method : 'POST',
    headers : {
        'content-type' : 'application/json',
        'accept' : 'application/json'
    },
    body : JSON.stringify(dataObj)
})

.then ((resp) => resp.json())
.then ((data) => {
    let newId = data.id;
    let idElement = document.createElement('div');
    idElement.textContent = `New ID: ${newId}`;
    document.body.appendChild(idElement)
} )

.catch(function (error) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorMessage);
})
}

let dataObj = {
    name : 'Steve',
    email : 'steve@steve.com'
}