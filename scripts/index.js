import { updatebirthday } from './modules/birthday.js';
import { EducationCard } from './modules/cards.js';
import { CertificationCard } from './modules/cards.js';
import { ProjectCard } from './modules/cards.js';
import { updateTime } from './modules/time.js';

const educationCards = [
    new EducationCard(
        'mboRijnland',
        'aug 2023',
        'Heden (zit in het 1e jaar)',
        'MBO 4 Software Developer',
        'Ik ben momenteel bezig met een MBO 4 opleiding tot Software Developer. Ik leer hier onder andere over HTML, CSS, JavaScript, PHP, en MySQL.'
    ),

    new EducationCard(
        'ROC van Amsterdam',
        'aug 2021',
        'feb 2023',
        'MBO 2 Medewerker Business Services',
        'Ik heb een MBO 2 opleiding gevolgd tot Medewerker Business Services. Tijdens deze opleiding heb ik kennis opgedaan over administratie, klantcontact en het gebruik van Microsoft Office. Daarnaast kreeg ik ook enige instructie op het gebied van ICT, zoals het bouwen van een computer en een introductie tot coderen via het leertraject van de BitAcademy.'
    ),
];

const certificationCards = [
    new CertificationCard(
        'Certified ScrumMaster',
        'feb 2023',
        'Ik heb een certificaat behaald voor het Certified ScrumMaster examen. Dit certificaat toont aan dat ik kennis heb van de Scrum methodiek en in staat ben om een Scrum team te leiden.'
    ),
];

const projectCards = [
    new ProjectCard(
        'Portfolio Website',
        'Dit is de website die je nu bekijkt. Ik heb deze website gemaakt om mijn portfolio te laten zien. De website is gemaakt met HTML, CSS en JavaScript.',
        'https://github.com/patrick6018145/Portfolio-Website-V2',
        './assets/images/projects/portfolio-website.png'
    ),
];

setInterval(updateTime, 1000);
updatebirthday();

educationCards.forEach(card => {
    card.appendTo('education-cards');
});

certificationCards.forEach(card => {
    card.appendTo('certification-cards');
});

projectCards.forEach(card => {
    card.appendTo('project-cards');
});