const sum = require("./functions");
const tape = require("tape");
tape("A test to test",(t)=>{
const actual=2+3;
const expexted=sum(2,3);
t.equal(actual,expexted,"Must be equals");
t.end();

})
