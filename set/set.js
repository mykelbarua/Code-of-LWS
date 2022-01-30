console.log("Testing js file from script........");

const newName = new Set(['m','y','k','e','l']);
console.log(newName);

const org = new Set(["Learn", "With", "Sumit"]);
console.log(org);

//add()
org.add("Bangladesh");
console.log(org);

// let text = '';
// org.forEach(function(value){
//     text += ' '+ value;
// });

// console.log(text);

//console.log(newName.values());

// values()
const orgIterator =  org.values();
let newOrg = "";
for(const enrty of orgIterator){
    newOrg += " "+enrty;
}
console.log(newOrg);

// delete()
org.delete("Bangladesh");
console.log(org);

//has()
console.log(org.has("Learn"));