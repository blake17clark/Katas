const hereos = [ "Batman", "Spider-Man", "Thor", "Starlord", "Deadpool"];
const villians = [
    "Joker",
    "Venom",
    "Loki",
    "Thanos",
    "Francis"
];

const printArrays = (msg) => {
    console.log(msg);
    console.log(hereos);
    console.log(villians);
}
printArrays("----PreStart");
// add value to back of arrays
hereos.push("Hulk");
villians.push("General Ross");
printArrays("----After Push");
//Remove value from back of array
const hulk = hereos.pop();
const ross = villians.pop();
printArrays(`----After Pop() ${hulk} & ${ross} :`);
// add value to front of array
hereos.unshift("Shazam");
villians.unshift("Black Atom");
printArrays('----After Unshift:');
// remove a value from front of array
const Shazam = hereos.shift();
const atom = villians.shift();
printArrays(`----After Shift ${Shazam} & ${atom} :`);
//break each array at index 2
const brokenHeroes = hereos.slice(2);
const brokenVillians = villians.slice(2);
printArrays('----Originals after Slice:');
console.log('Broken Hereos', brokenHeroes);
console.log('Broken Villians', brokenVillians);
//add value to somewhere in the middle of arrays
hereos.splice(2, 0, "Buzz Lightyear");
villians.splice(2, 0, "Zurg");
printArrays('----After Spice');
//Remove value somewhere in middle
const buzz = hereos.splice(2, 1);
const zurg = villians.splice(2, 1);
printArrays(`----After Spice Delete ${buzz} & ${zurg} :`);