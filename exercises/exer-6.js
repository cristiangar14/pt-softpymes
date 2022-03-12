/*
INSTRUCCIONES:
1. Cree una función tomando la variable "companies" como parámetro y devolviendo un nuevo objeto
   cuyos atributos son la concatenación del apellido, nombre y edad de cada "user".ok

2. Cada atributo debe tener el valor de boolean "car".ok

Ver ejemplo de la variable exampleObj. */

const exampleObj = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true
};

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

const newList = (companies)=>{
  const object = {};
  for (i of companies){
    const users = i.users
    users.map(u =>{ 
      //defino el nombre de la llave para pasarla en el map
      let name = u.firstName+u.lastName+u.age;
      object[name] = u.car})
    }
  return object
}

console.log(`%c ---- EXAMPLE TEST 6 --- Example object: `, 'background: #222; color: #bada55', exampleObj);
cleanConsole(6, companies);
console.log('%c ---- RES 6 --- ', 'background: #bada55; color: #222', 'Put here your method: ', newList(companies));