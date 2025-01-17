let premios = new Array;
let participantes;
let cofres;

function repartir(){
    cofres = document.getElementById('cofres').value * 5;
    let texto = document.getElementById('participantes').value;
    participantes = texto.split(",");

    for(let i = 0; i < participantes.length; i++){
        if(premios[i]) {
            premios[i]=0;
        }else premios.push(0);  
    }
    for(let i = 0; i < cofres; i++){
        let aleatorio =  Math.floor(Math.random()*(participantes.length));
        premios[aleatorio] += 1;
    }
    mostrar();
};

function mostrar(){
    let intervalo = (document.getElementById('intervalo').value && document.getElementById('intervalo').value>0) ? document.getElementById('intervalo').value : 10;
    const aux = (participantes.length % intervalo == 0) ? (participantes.length / intervalo - 1) : (Math.trunc(participantes.length / intervalo));
    let resultado = "<table><tr>";

    for(let i = 0; i <= aux; i++){
        resultado += "<th>NOMBRE</th><th>COFRES</th>";
    }
    resultado += "</tr>";
    for(let i = 0; i < intervalo; i++){
        if (participantes[i]){
            resultado += "<tr><td class=\"name\">"+participantes[i]+"</td><td class=\"amount\">"+premios[i]+"</td>";
            for(let j = 1; j <= aux;j++){
                let aux2 = j * intervalo + i;
                if (participantes[aux2]){
                    resultado += "<td class=\"name\">"+participantes[aux2]+"</td><td class=\"amount\">"+premios[aux2]+"</td>";
                }
            }
            resultado += "</tr>";
        }     
    }
    resultado += "</table>";
    resultado += "<p>Cofres repartidos <strong>" + cofres + "</strong>.</p>";
    resultado += "<label for=\"intervalo\">Mostrar cada: </label><br/>";       
    resultado += "<input type=\"number\" name=\"intervalo\" id=\"intervalo\" value=\"" + intervalo + "\"><br/>";
    resultado += "<input type=\"button\" value=\"MOSTRAR\" id=\"mostrar\" class=\"boton\" onclick=\"mostrar();\">";
    document.getElementById("resultado").innerHTML = resultado;
};
