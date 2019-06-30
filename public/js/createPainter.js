function createUser() {
    var name = document.getElementById('name');
    var firstLastName = document.getElementById('firstLastName');
    var secondLastName = document.getElementById('secondLastName');
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');
    var gender = document.querySelectorAll("[name='sexo']");

    var descriptionInput = document.getElementById('descript');
    var stageNameInput = document.getElementById('stageName');
    var description = "";
    var stageName = "";

    if (descriptionInput && stageNameInput) {
        description = descriptionInput.value;
        stageName = stageNameInput.value;
    }

    var genderNode;
    for (var index = 0; index < gender.length; index++) {
        if (gender[index].checked) {
            genderNode = index;
            break;
        }
    }

    var painter =
    {
        name: name.value,
        firstLastName: firstLastName.value,
        secondLastName: secondLastName.value,
        email: email.value,
        password: pass.value,
        description: description,
        stageName: stageName,
        gender: gender[genderNode].value 
    };
    fetch('http://localhost:8080/users/create', {
        method: "POST",
        body: JSON.stringify(painter),
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