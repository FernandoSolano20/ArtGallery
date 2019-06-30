(function () {

    var formulario = document.formulario_registro,
        elementos = formulario.elements;
    var regexText = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+(\s*[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*)*[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
            if (elementos[i].type == "number" && elementos[i].classList[0] !== "error") {
                if (elementos[i].value.length == 0) {
                    console.log('El campo ' + elementos[i].name + ' esta incompleto');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else if (elementos[i].value.length > 9) {
                    console.log('El campo ' + elementos[i].name + ' tiene más de 9 caractéres');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else if (identificator === "Cédula" && isNaN(elementos[i].value)) {
                    console.log('El campo ' + elementos[i].name + ' no cumple con el formato');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else if (identificator === "Pasaporte" && isNaN(elementos[i].value)) {
                    console.log('El campo ' + elementos[i].name + ' no cumple con el formato');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else if (identificator === "Residente" && isNaN(elementos[i].value)) {
                    console.log('El campo ' + elementos[i].name + ' no cumple con el formato');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error", "");
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
            if (elementos[i].type == "text" && elementos[i].classList[0] !== "error") {
                if (elementos[i].value.length == 0) {
                    console.log('El campo ' + elementos[i].name + ' esta incompleto');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else if (elementos[i].value.length > 100) {
                    console.log('El campo ' + elementos[i].name + ' tiene más de 100 caractéres');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else if (!regexText.test(elementos[i].value)) {
                    console.log('El campo ' + elementos[i].name + ' no cumple con el formato');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error", "");
                }
            }
        }

        return error;
    };

    var validateEmail = function () {
        var elementos = document.querySelectorAll("[type='email']");
        var error = false;
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "email" && elementos[i].classList[0] !== "error") {
                if (elementos[i].value.length == 0) {
                    console.log('El campo ' + elementos[i].name + ' esta incompleto');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else if (elementos[i].value.length > 100) {
                    console.log('El campo ' + elementos[i].name + ' tiene más de 100 caractéres');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else if (!regexEmail.test(elementos[i].value)) {
                    console.log('El campo ' + elementos[i].name + ' no cumple con el formato');
                    elementos[i].className = elementos[i].className + " error";
                    error = true;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error", "");
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
            if (ele[i].type == "password" && elementos[i].classList[0] !== "error") {
                if (ele[i].value.length == 0) {
                    console.log('El campo ' + ele[i].name + ' esta incompleto');
                    ele[i].className = ele[i].className + " error";
                    error = true;
                } else if (ele[i].value.length > 100) {
                    console.log('El campo ' + ele[i].name + ' tiene más de 100 caractéres');
                    ele[i].className = ele[i].className + " error";
                    error = true;
                } else if (elementos.pass.value !== elementos.pass2.value) {
                    elementos.pass.value = "";
                    elementos.pass2.value = "";
                    elementos.pass.className = elementos.pass.className + " error";
                    elementos.pass2.className = elementos.pass2.className + " error";
                    error = true;
                } else {
                    elementos.pass.className = elementos.pass.className.replace(" error", "");
                    elementos.pass2.className = elementos.pass2.className.replace(" error", "");
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
            if (elementos[i].children[0].type === "radio" && elementos[i].classList[0] !== "error") {
                var resultado = false
                var opciones = elementos[i].querySelectorAll("[type='radio']");
                for (var index = 0; index < opciones.length; index++) {
                    if (opciones[index].checked) {
                        resultado = true;
                        break;
                    }
                }

                if (resultado == false) {
                    elementos[i].className = elementos[i].className + " error";
                    console.log('El campo ' + opciones[0].name + ' esta incompleto');
                    error = true;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error", "");
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

}())