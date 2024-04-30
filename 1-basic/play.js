var name = "Max";
let age = 20;
var hasHobbies = true;

age = 40;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return "Name is " + userName +
        ", UserAge " + userAge +
        ", and the user has hobbies: " + userHasHobby;

}


const add = (a, b) =>  a + b;

const addRandom = () => 1 + 2;

console.log(add(3, 4));
console.log(addRandom());
console.log({summarizeUser: summarizeUser(name, age, hasHobbies)});

const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};


console.log({person});
person.greet();


const copiedPerson = {...person};
console.log({copiedPerson});

const hobbies = ["Sport", "Cookie"];
console.log(hobbies.map(hobby => {
  return "Hobby " + hobby
}));

console.log(hobbies)

const copiedArray = [...hobbies];
console.log({copiedArray});

const toArray = (...args) => {
    return [args];
}


console.log(toArray(1, 2, 3, 4));



const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

const {name: names, age: ages} = copiedPerson;


console.log({names, ages});

const [hob1, hob2] = copiedArray;

console.log({hob1, hob2});


const fetchData = (a) => {
    const promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("Done!" + a);
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log("Time is Done!");
    // fetchData().then(text1 => {
    //     console.log({text1});
    //     fetchData().then((text2) => {
    //         console.log({text2});
    //     })
    // });


    fetchData("text1").then(text1 => {
        console.log({text1});
        return fetchData("text2");
    }).then(text2 => {
        console.log({text2});
    });
}, 2000);


console.log("Hello");
console.log("Hi!");
