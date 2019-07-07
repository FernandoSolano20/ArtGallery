function createUser(user) {
    fetch('http://localhost:8080/users/create', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(
        response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

    /*var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:8080/painters/create', true);

    //Send the proper header information along with the request
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var response;
    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            response = this;
        }
    }
    xhr.send(painter);*/
}