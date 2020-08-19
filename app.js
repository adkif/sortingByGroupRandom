const students = [
    { name: 'Adolphe', sexe: 'M' },
    { name: 'Pacifique', sexe: 'M' },
    { name: 'Maene', sexe: 'M' },
    { name: 'Vianney', sexe: 'M' },
    { name: 'Steve', sexe: 'M' },
    { name: 'Tsongo', sexe: 'M' },
    { name: 'Claudette', sexe: 'F' },
    { name: 'Joelle', sexe: 'F' },
    { name: 'BBC', sexe: 'M' },
    { name: 'Adrienne', sexe: 'F' },
    { name: 'Karis', sexe: 'M' },
    { name: 'Alice', sexe: 'F' }
];

const sortByGroup = (numberOfGroup, students) => {
    let group = [];
    const sortData = [];
    const n = students.length / numberOfGroup;
    for (let i = 0; i < numberOfGroup; i++) {
        for (let j = 0; j < n; j++) {
            let current = random(0, students.length);
            group[j] = students[current];
            while (!oneGirlIsAlreadyInGroup(group)) {
                current = random(0, students.length);
                group[j] = students[current];
            }
            students.splice(current, 1);
        }
        sortData.push(group);
        group = [];
    }
    return sortData;
}


const checkGenre = (student) => {
    return student.sexe === 'F' ? true : false;
}

const oneGirlIsAlreadyInGroup = (students) => {
    const girls = students.filter(checkGenre);
    return (girls.length === 1 || girls.length === 0) ? true : false;
}

const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(sortByGroup(4, students));