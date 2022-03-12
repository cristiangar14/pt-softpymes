/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío. ok

2. El nombre de cada "company" debe tener la primer letra en mayúscula. ok

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula. ok

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente). ok

5. Los "users" de cada "company" deben aparecer en orden alfabético. ok
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const companies = createAll();

//

function primeraMayuscula(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const companies1 =(companies)=>{

  

  for(i of companies){
    //primera mayuscula para el nombre de la compañia
    i.name = primeraMayuscula(i.name)
    //orden de las compañias

    
    const users = i.users
    
    for ( u of users){
      if( u.firstName === undefined){
        u.firstName = ''; 
      } else {
        u.firstName = primeraMayuscula(u.firstName)
      }
      if( u.lastName === undefined){
        u.lastName = ''; 
      } else {
        u.lastName = primeraMayuscula(u.lastName);
      }
      if( u.age === undefined){
        u.age = ''; 
      } 
      if( u.car === undefined){
        u.car = false; 
      } 
    }
    //orden usuarios
    users.sort(((a, b) => a.firstName > b.firstName ? 1 : -1));
    i.users= users;
    i.totalUser = users.length;
  }


  companies.sort(((a, b) => a.totalUser > b.totalUser ? -1 : 1));
  return companies
  
}


cleanConsole(1, companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ', companies1(companies));




