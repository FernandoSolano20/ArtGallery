function crearpersona() {

    var painter =
    {
        name: document.getElementById('name').value,
        firstLastName: document.getElementById('firstLastName').value,
        secondLastName: document.getElementById('secondLastName').value,
        //img: document.getElementById('img').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        description: document.getElementById('descript').value,
        stageName: document.getElementById('stageName').value,
        gender: document.querySelectorAll("[name='sexo']")[0].value
    };

    if (document.getElementById("pass2").value == document.getElementById("pass").value) {
        fetch('http://localhost:8080/painters/create', {
            method: "POST",
            body: JSON.stringify(painter),
            headers:{
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
    else {
        alert("Debe digitar la misma clave en ambos campos");
    }
}