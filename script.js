const team = [{
    firstname: 'Wayne Barnett',
    image : 'wayne-barnett-founder-ceo.jpg',
    role: 'Founder & CEO',
},
{
    firstname: 'Angela Caroll',
    image : 'angela-caroll-chief-editor.jpg',
    role: 'Chief Editor',
},
{
    firstname: 'Walter Gordon',
    image : 'walter-gordon-office-manager.jpg',
    role: 'Front-End Developer',
},
{
    firstname: 'Angela Lopez',
    image : 'angela-lopez-social-media-manager.jpg',
    role: 'Social Media Manager',
},
{
    firstname: 'Scott Estrada',
    image : 'scott-estrada-developer.jpg',
    role: 'Developer',
},
{
    firstname: 'Barbara Ramos',
    image : 'barbara-ramos-graphic-designer.jpg',
    role: 'Graphic Designer',
},
]

const list = document.querySelector('ul')


for(let i in team ){
    const colleghi = team[i]
    console.log(colleghi);
    console.log(colleghi.firstname);
    console.log(colleghi.age);
    console.log(colleghi.role);
    for(let key in colleghi){
        list.innerHTML += `
        <li>${key}: ${colleghi[key]}</li>
        `
    }


}
