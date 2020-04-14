const url=require('url');

const reqUrl="http://localhost:8080/abc.html?uname=Aakarshit&pass=12345";

const urlObject =url.parse(reqUrl);
// console.log(urlObject);
// console.log(typeof urlObject);


//Host (root domain)
// console.log("host"+urlObject.path);

//Host name
console.log(urlObject.hostname);