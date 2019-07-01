(function () {

    var formulario = document.formulario_registro,
        elementos = formulario.elements;
    var regexText = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+(\s*[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*)*[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    var removeClassError = function (element) {
        element.className = element.className.replace("error", "");
    }

    var addClassError = function (element) {
        element.className = element.className + " error";
    }

    var validateInputsNumber = function () {
        var elementos = document.querySelectorAll("[type='number']");
        var options = document.querySelectorAll("[type='radio'][name='id']");
        var identificator;
        var error = false;
        for (var index = 0; index < options.length; index++) {
            if (options[index].checked) {
                identificator = index;
                break;
            }
        }
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "number") {
                if (elementos[i].value.length == 0) {
                    toast('El campo ' + elementos[i].name + ' esta incompleto', elementos[i].name + '1');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (elementos[i].value.length !== 9) {
                    toast('El campo ' + elementos[i].name + ' no tiene 9 caractéres', elementos[i].name + '2');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (identificator === "Cédula" && isNaN(elementos[i].value)) {
                    toast('El campo ' + elementos[i].name + ' no cumple con el formato', elementos[i].name + '3');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (identificator === "Pasaporte" && isNaN(elementos[i].value)) {
                    toast('El campo ' + elementos[i].name + ' no cumple con el formato', elementos[i].name + '4');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (identificator === "Residente" && isNaN(elementos[i].value)) {
                    toast('El campo ' + elementos[i].name + ' no cumple con el formato', elementos[i].name + '5');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else {
                    removeClassError(elementos[i]);
                }
            } else {
                error = true;
            }
        }

        return error;
    };

    var validateInputsText = function () {
        var elementos = document.querySelectorAll("[type='text']");
        var error = false;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "text") {
                if (elementos[i].value.length == 0) {
                    toast('El campo ' + elementos[i].name + ' esta incompleto', elementos[i].name + '1');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (elementos[i].value.length > 100) {
                    toast('El campo ' + elementos[i].name + ' tiene más de 100 caractéres', elementos[i].name + '2');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (elementos[i].value.length < 3) {
                    toast('El campo ' + elementos[i].name + ' tiene menos de 3 caractéres', elementos[i].name + '3');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (!regexText.test(elementos[i].value)) {
                    toast('El campo ' + elementos[i].name + ' no cumple con el formato', elementos[i].name + '4');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else {
                    removeClassError(elementos[i]);
                }
            }
        }

        return error;
    };

    var validateEmail = function () {
        var elementos = document.querySelectorAll("[type='email']");
        var error = false;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "email") {
                if (elementos[i].value.length == 0) {
                    toast('El campo ' + elementos[i].name + ' esta incompleto', elementos[i].name + '1');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (elementos[i].value.length > 100) {
                    toast('El campo ' + elementos[i].name + ' tiene más de 100 caractéres', elementos[i].name + '2');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (elementos[i].value.length < 2) {
                    toast('El campo ' + elementos[i].name + ' tiene menos de 2 caractéres', elementos[i].name + '3');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else if (!regexEmail.test(elementos[i].value)) {
                    toast('El campo ' + elementos[i].name + ' no cumple con el formato', elementos[i].name + '4');
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    error = true;
                } else {
                    removeClassError(elementos[i]);
                }
            } else {
                error = true;
            }
        }

        return error;
    }

    var validatePassword = function () {
        var ele = document.querySelectorAll("[type='password']");
        var error = false;
        for (var i = 0; i < ele.length; i++) {
            if (ele[i].type == "password") {
                if (ele[i].value.length == 0) {
                    toast('El campo ' + ele[i].name + ' esta incompleto', ele[i].name + '1');
                    removeClassError(ele[i]);
                    addClassError(ele[i]);
                    error = true;
                } else if (ele[i].value.length > 100) {
                    toast('El campo ' + ele[i].name + ' tiene más de 100 caractéres', ele[i].name + '2');
                    removeClassError(ele[i]);
                    addClassError(ele[i]);
                    error = true;
                } else if (elementos.pass.value !== elementos.pass2.value) {
                    removeClassError(elementos.pass);
                    addClassError(elementos.pass);
                    removeClassError(elementos.pass2);
                    addClassError(elementos.pass2);
                    toast('Las contraseñas no coinciden', elementos[i].name + '3');
                    error = true;
                } else {
                    removeClassError(elementos.pass);
                    removeClassError(elementos.pass2);
                }
            } else {
                error = true;
            }
        }

        return error;
    }

    var validateRadios = function () {
        var elementos = document.getElementsByClassName("radio");
        var error = false;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].children[0].type === "radio") {
                var resultado = false
                var opciones = elementos[i].querySelectorAll("[type='radio']");
                for (var index = 0; index < opciones.length; index++) {
                    if (opciones[index].checked) {
                        resultado = true;
                        break;
                    }
                }

                if (resultado == false) {
                    removeClassError(elementos[i]);
                    addClassError(elementos[i]);
                    toast('El campo ' + opciones[0].name + ' esta incompleto', opciones[0].name + '1');
                    error = true;
                } else {
                    removeClassError(elementos[i]);
                }
            } else {
                error = true;
            }
        }

        return error;
    };

    var enviar = function (e) {
        if (validateInputsNumber() | validateInputsText() | validateEmail() | validatePassword() | validateRadios()) {
            console.log('Falto validar los Input');
            e.preventDefault();
        } else {
            createUser();
            console.log("envia");
            e.preventDefault();
        }
    };

    var selectID = function (e) {
        var idLabel = document.getElementById("labelID");
        var idInput = document.getElementById("ID");
        if (idLabel && idInput) {
            idLabel.textContent = e.target.value + ":";
            idInput.name = e.target.value;
        }
    }

    var createInputs = function (e) {
        var colum = document.getElementsByClassName("columnForm")[1];
        if (e.target.value === "Pintor") {
            var divInputGroup = document.createElement("div");
            divInputGroup.setAttribute("class", "input-group painterInput");

            var inputStageName = document.createElement("input");
            inputStageName.setAttribute("type", "text");
            inputStageName.setAttribute("id", "stageName");
            inputStageName.setAttribute("name", "stageName");
            divInputGroup.appendChild(inputStageName);

            var labelStageName = document.createElement("label");
            labelStageName.setAttribute("class", "label");
            labelStageName.setAttribute("for", "stageName");
            labelStageName.textContent = "Nombre Artístico:";
            divInputGroup.appendChild(labelStageName);

            colum.insertBefore(divInputGroup, colum.lastElementChild);


            var divInputGroup2 = document.createElement("div");
            divInputGroup2.setAttribute("class", "input-group painterInput");

            var inputDescript = document.createElement("input");
            inputDescript.setAttribute("type", "text");
            inputDescript.setAttribute("id", "descript");
            inputDescript.setAttribute("name", "descript");
            divInputGroup2.appendChild(inputDescript);

            var labelDescript = document.createElement("label");
            labelDescript.setAttribute("class", "label");
            labelDescript.setAttribute("for", "descript");
            labelDescript.textContent = "Descripción:";
            divInputGroup2.appendChild(labelDescript);

            colum.insertBefore(divInputGroup2, colum.lastElementChild);
        } else {
            var paitersInputs = document.getElementsByClassName("painterInput");
            if (paitersInputs.length !== 0) {
                var ele = paitersInputs.length;
                for (var index = 0; index < ele; index++) {
                    colum.removeChild(paitersInputs[0]);
                }
            }
        }
        attachEvents();
    }

    var focusInput = function () {
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    };

    var blurInput = function () {
        if (this.value <= 0) {
            this.parentElement.children[1].className = "label";
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }
    };

    var checkedRadio = function () {
        if (this.checked) {
            this.parentElement.className = this.parentElement.className.replace("error", "");
        }
    };

    var toast = function (text, id) {
        var divAlert = document.querySelector(".alert");
        var toast = divAlert.children;
        var createElement = true;

        if (toast.length < 12) {
            if (toast) {
                for (var i = 0; i < toast.length; i++) {
                    if (toast[i].getAttribute("data-inputID") === id) {
                        createElement = false;
                    }
                }
            }
        }
        if(createElement)
            createToast(text,id);
    }

    var createToast = function (text,id) {
        var divAlert = document.querySelector(".alert");

        var container = document.createElement("div");
        container.setAttribute("class", "toast");
        container.setAttribute("data-inputID", id);
        container.addEventListener("click", deleteAlert);
        divAlert.appendChild(container);


        var message = document.createElement("div");
        message.setAttribute("class", "message");
        container.appendChild(message);

        var closeAnchor = document.createElement("a");
        closeAnchor.setAttribute("class", "close");
        closeAnchor.textContent = "x";
        message.appendChild(closeAnchor);

        var iconAlert = document.createElement("i");
        iconAlert.setAttribute("class", "far fa-exclamation-triangle warning");
        message.appendChild(iconAlert);

        var messageText = document.createElement("span");
        messageText.setAttribute("class", "warning")
        messageText.innerText += text;
        message.appendChild(messageText);

        setTimeout(function () {
            if (container) {
                divAlert.removeChild(container);
            }
        }, 25000);
    }

    var deleteAlert = function (event) {
        if (event.target.nodeName === "A") {
            var divAlert = document.querySelector(".alert");
            divAlert.removeChild(event.currentTarget);
        }
    }

    // --- Eventos ---
    var attachEvents = function () {
        formulario = document.formulario_registro;
        elementos = formulario.elements;
        var btnSave = document.getElementById("btn-save");
        if (btnSave)
            btnSave.addEventListener("click", enviar);

        var id = document.getElementById("identification");
        if (id)
            id.addEventListener("change", selectID);

        var client = document.getElementById("client");
        if (client)
            client.addEventListener("change", createInputs);

        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password" || elementos[i].type == "number") {
                elementos[i].addEventListener("focus", focusInput);
                elementos[i].addEventListener("blur", blurInput);
            }
            if (elementos[i].type == "radio") {
                elementos[i].addEventListener("change", checkedRadio);
            }
        }
    }

    attachEvents();

}());
