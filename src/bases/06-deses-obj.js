
const person = {
    name: 'Tony',
    age: 35,
    codeName: 'IronMan',
    power: 'Dinero'
}

const { name, age, codeName, power = 'No tiene poder' } = person;

// console.log( name );
// console.log( age );
// console.log( codeName );
// console.log( power );


// const createHero = ({ id = 123232, name = 'Peter', age = 20, codeName = 'SpiderMan', power = 'Punzada'}) => {

//     return {
//         id: 123234,
//         name,
//         age,
//         codeName,
//         power,
//     }

// }
const createHero = ({ id = 123232, name = 'Peter', age = 20, codeName = 'SpiderMan', power = 'Punzada' }) => 
    ({ 
        id: 123234,
        name,
        age, 
        codeName,
        power, 
    })


console.log(createHero(person));
