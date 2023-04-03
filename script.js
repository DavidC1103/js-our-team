const team = [{
    firstname: 'Davide',
    age: '26',
    role: 'Full Stack Developer',
},
{
    firstname: 'Ciccio',
    age: '20',
    role: 'Back-End Developer',
},
{
    firstname: 'Andrea',
    age: '24',
    role: 'Front-End Developer'
}]


for(let i in team ){
    const colleghi = team[i]
    console.log(colleghi);
    console.log(colleghi.firstname);
    console.log(colleghi.age);
    console.log(colleghi.role);
}
