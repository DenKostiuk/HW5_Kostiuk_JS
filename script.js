let users = [
    {
        name: "John",
        surname: "Jonson",
        age: 20,
        salary: 1000,
    },
    {
        name: "Mark",
        surname: "Markov",
        age: 25,
        salary: 1500,
    },
    {
        name: "Ben",
        surname: "Banan",
        age: 16,
        salary: 0,
    },
    {
        name: "Rob",
        surname: "Cobman",
        age: 17,
        salary: 0,
    },
    {
        name: "Evan",
        surname: "Voland",
        age: 32,
        salary: 2500,
    },
];

let midSalary = 0;

for (let i = 0; i < users.length; i++) {
    midSalary += users[i].salary / users.length;
    if (users[i].age < 18) {
        users[i].willDrink = false;
        console.log(users[i].name, users[i].age);
        console.log(`Удален пользователь ` +users[i].name,`ему было ` +users[i].age);
        delete users[i];
        users[i] = null;
    } else {
        users[i].willDrink = true;
    }
};

console.log(`Средняя зарплата пользователей ` + midSalary);

console.log(users);


