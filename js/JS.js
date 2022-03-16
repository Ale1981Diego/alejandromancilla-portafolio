// funcion modo oscuro
const estilo = document.documentElement.style;
const icono = document.getElementById('darkMode'); // Se obtiene el icono con ID darkMode (luna), para modificarlo por el sol y viceversa.

const dark = document.querySelector("#btnDark"); //Se captura al boton con id="btnDark"

dark.addEventListener('click', () => {
    if (estilo.getPropertyValue('--background') === '#fff') {
        estilo.setProperty('--background', '#002B36');
        estilo.setProperty('--color', '#fff');
        document.getElementById('logo').src = "imagenes/logo.png";
        cambioIconoSun();
    } else {
        estilo.setProperty('--background', '#fff');
        estilo.setProperty('--color', '#333');
        document.getElementById('logo').src = "imagenes/logo2.png";
        cambioIconoMoon();
    }
});

// funcion que cambia el icono de la luna por el del sol - removiendo la clase fa-moon y adhiriendole la clase fa-sun.

const cambioIconoSun = () => {
    icono.classList.remove('fa-moon');
    icono.classList.add('fa-sun');
}

// funcion que cambia el icono del sol por el de la luna - removiendo la clase fa-sun y adhiriendole la clase fa-moon.

const cambioIconoMoon = () => {
    icono.classList.remove('fa-sun');
    icono.classList.add('fa-moon');
}

// funcion menu desplegable - dispositivos moviles y tablets.

const menu = document.getElementById('menu');
const botonMenu = document.getElementById('btnMenu');

botonMenu.addEventListener('click', function (){
    menu.classList.toggle('mostrar');
});

const btnCerrar = document.getElementById('cerrar');

btnCerrar.addEventListener('click', function(){
    menu.classList.remove('mostrar');
});

// funcion boton scroll top - min-width: 768px.

const btnTop = document.getElementById('ScrollTop');

btnTop.addEventListener('click', () => {
    
    // Compatibilidad con IE

    document.body.scrollTo ({
        top:0,
    })

    document.documentElement.scrollTo({
        top:0,
    })
});


/* validación formulario */

/* se capturan los elementos del formulario */

const form = document.forms.formulario;

let nombre = form.querySelector('#nombre');
let telefono = form.querySelector('#tel');
let mail = form.querySelector('#mail');
let asunto = form.querySelector('#asunto');
let area = form.querySelector('#datos-area');
let btnSubmit = form.querySelector('#btnSubmit');

let arr = [];

/* agregamos eventos a cada input */

nombre.addEventListener('blur', e => {
    if (!(/^[A-Za-z ]+$/gm.test(nombre.value)) || nombre.value.length < 3)
    {
        nombre.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        arr.push("debe completar el nombre y el apellido");
        return arr;
    } else 
    {   
        nombre.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        if (telefono.value != '' && mail.value != '') 
        {
            arr = [];
            return arr;
        }
    }
});

telefono.addEventListener('blur', () => {
    if (!(/^[0-9]{10,}$/gm.test(telefono.value)))
    {
        telefono.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        arr.push("debe ingresar un mail");
        return arr;
    } else 
    {     
        telefono.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        if (nombre.value != '' && mail.value != '') 
        {
            arr = [];
            return arr;
        }
    }
});

mail.addEventListener('blur', ()=> {
    if (!(/^[a-z0-9_.-]+\@[a-z.]+[a-z.]{3}[a-z]{2,5}/gm.test(mail.value)))
    {
        mail.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        arr.push("debe ingresar un mail");
        return arr;
    } else 
    {     
        mail.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        if (nombre.value != '' && telefono.value != '') 
        {
            arr = [];
            return arr;
        }
    }
});

/* se agrega un evento al formulario */

form.addEventListener('submit', validarFormulario);

/* funcion que valida el envio del formulario */

function validarFormulario(e) {
    if (arr.length > 0 || nombre.value == '' || telefono.value == '' || mail.value == '') 
    {
        e.preventDefault();
    }
}

/* descarga de curriculum */

const div = document.querySelector('.boton-curriculum');
const curriculum = div.querySelector('button');

curriculum.addEventListener('click', e =>{    
    const a = e.target;
    a.href = '/documentos/Alejandro Mancilla.pdf'
});
