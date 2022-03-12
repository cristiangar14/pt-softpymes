/*
INSTRUCCIONES:

Cree una función que reciba la variable "companies" como parámetro; esta función debe devolver
un booleano que:

1. Valide que todos los nombres de las empresas y los atributos "firstName" y "lastName" de "users" están en mayúsculas. ok, que inicie con mayusculas

2. Probar la operación de esta función importando la función creada en el "exer-1.js". */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const {companies1} = require('./exer-1');

const companies = createAll();



function mayus(companies){

  let exp =new RegExp('^[A-Z]')
  const nameCompanies = companies.every(el => exp.test(el.name))
  let userFirstName = true;
  let userLastName = true;
  
 for(i of companies){
    
  const users = i.users
  for ( u of users){
    let exp =new RegExp('^[A-Z]')
    if(u.firstName !=='' && !exp.test(u.firstName)){
      userFirstName = false; 
    } else {
      userFirstName = userFirstName;
    }
    if(u.lastName !=='' && !exp.test(u.lastName)){
      userLastName = false; 
    } else {
      userLastName = userLastName;
    }
  }
 
}


 if(nameCompanies && userFirstName && userLastName){
   return true
 }else{
   return false
 }

}


cleanConsole(3, companies);
console.log('%c ---- RES 3 --- ', 'background: #bada55; color: #222', 'Put here your method: ', mayus(companies));
