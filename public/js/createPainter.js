function createUser(user) {
    fetch('http://localhost:8080/api/users/create', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(
        response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}

function uploadImage(user) {
    var photo = document.getElementById('img').files[0];
    var formData = new FormData();    
    formData.append('photo', photo );

    fetch('http://localhost:8080/api/image/upload', {
        method: "POST",
        body: formData
    }).then(
        response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            user.img = response.secure_url;
            createUser(user);
        });
}