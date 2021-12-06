const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]
//no es necesario lo siguiente porque ya se tiene al principio
const json = JSON.stringify(ovejas); // se convierte en texto
console.log(json);
const json2 = JSON.parse(json);// se convierte en objeto
console.log(json2);
// se utiliza filter para filtrar las propiedades de un objeto
const reult=json2.filter(oveja =>
    oveja.name.includes('N') && oveja.name.includes('a') && oveja.color==='rojo'//incluir ciertas caracteristicas de las propiedades
)
console.log(reult[0].name);

tabla(reult);

function tabla(reult){
    // ciclo for en el cual va ir recorriendo todos los objetos convertidos y los va almacenar variable valor
    for(let valor of reult){
        //se pintan los datos del objeto en el identificador root, se le asigna cada dato del objeto a cada campo de la tabla
        root.innerHTML +=`
        <tr>
            <th scope="row">${valor.name}</th>
            <td>${valor.color}</td>

        </tr>
        `
    }
}