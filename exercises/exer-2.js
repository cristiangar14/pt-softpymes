/* INSTRUCCIONES:

Crear una función que reciba los parámetros la variable "companies" y un booleano "hasCar":

1. Para cada "company" debe conservar solo "users" cuyo valor de atributo "car" es igual al parámetro del booleano "hasCar". ok

2. El atributo "usersLength" deben indicar el total de "users" correspondientes al parámetro "hasCar". ok

*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

function car(companies, hasCar){
  for(i of companies){
    const users = i.users
    const userFilt =users.filter((el)=> el.car === hasCar)

    i.users = userFilt;
    i.usersLength = userFilt.length;
  }
  return companies
}

cleanConsole(2, companies);
console.log('%c ---- RES 2 --- ', 'background: #bada55; color: #222', 'Put here your method: ', car(companies, true));
