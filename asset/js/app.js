
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont =1;
var bitacoras=[]
var formulario= document.getElementById("bitacora")
var cajaFecha = document.getElementById("fecha");
var cajaDescp = document.getElementById("descp");
var cajaCant = document.getElementById("cant");

formulario.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    let bitacora={
        cant:cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    if(bitacora.fecha!=""&&bitacora.fecha!=null&&bitacora.descripcion!=""&&bitacora.descripcion!=null&&bitacora.cantidad!=""&&bitacora.cantidad!=null){
        bitacoras.push(bitacora);
        cont++;
        mostrar();
        cajaFecha.style.borderColor="green";
        cajaDescp.style.borderColor="green";
        cajaCant.style.borderColor = "green";
    }
    else{
        if(bitacora.fecha!=""&&bitacora.fecha!=null){
            cajaFecha.style.borderColor="green";
        }
        else{
            cajaFecha.style.borderColor="red";
        }

        if(bitacora.descripcion!=""&&bitacora.descripcion!=null){
            cajaDescp.style.borderColor="green";
        }
        else{
            cajaDescp.style.borderColor="red";
        }

        if(bitacora.cantidad!=""&&bitacora.cantidad!=null){
            cajaCant.style.borderColor="green";
        }
        else{
            cajaCant.style.borderColor="red";
        }       
    }
});

const crearElemento =(bitacora,tbody)=>{
    let tr=document.createElement("tr");
    Object.values(bitacora).forEach(item=>{
        let td =document.createElement("td");
        let content=document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class","click")
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}

const eliminar=(tbody)=>{
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}


const agregar=()=>{
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item,index)=>{
        item.addEventListener("click", ()=>{
            document.querySelector("#fecha").value=item.childNodes[1].textContent;
            document.querySelector("#descp").value=item.childNodes[2].textContent;
            document.querySelector("#cant").value=item.childNodes[3].textContent;
        })
    })
}

const mostrar=()=>{
    if(document.querySelector(".tabla-btc tbody").childElementCount>0){
        eliminar(document.querySelector(".tabla-btc tbody"))
    }
    bitacoras.forEach(item=>{
        crearElemento(item,document.querySelector(".tabla-btc tbody"))
    });
    agregar();
}
