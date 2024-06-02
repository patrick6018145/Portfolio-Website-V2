import { updatebirthday } from './modules/birthday.js';
import { scrollDown100vh } from './modules/scrollDown100vh.js';
import { updateTime } from './modules/time.js';
import { EducationCard, CertificationCard, ProjectCard, SkillCard } from './modules/cards.js';

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
        'Command Line',
        'nov 2023',
        'Ik heb een certificaat behaald voor de Command Line. Dit certificaat toont aan dat ik kennis heb van de command line-interface.',
        'https://www.codecademy.com/profiles/patrick982/certificates/c87ba0541f8be78bc2f4ba1128233f6f',
        './assets/images/certifications/codecademy-commandLine.png'
    )
];

const projectCards = [
    new ProjectCard(
        'Portfolio Website',
        'Dit is de website die je nu bekijkt. Ik heb deze website gemaakt om mijn portfolio te laten zien. De website is gemaakt met HTML, CSS en JavaScript.',
        'https://github.com/patrick6018145/Portfolio-Website-V2',
        'Bekijk op GitHub',
        './assets/images/projects/portfolio-website-V2.png'
    )
];

const SkillCards = [
    new SkillCard(
        './assets/images/skills/html-5.png'
    ),

    new SkillCard(
        './assets/images/skills/css-3.png'
    ),

    new SkillCard(
        './assets/images/skills/javascript.png'
    ),

    new SkillCard(
        './assets/images/skills/php.png'
    ),

    new SkillCard(
        './assets/images/skills/mysql.png'
    )
];

setInterval(updateTime, 1000);
scrollDown100vh();
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

SkillCards.forEach(card => {
    card.appendTo('skill-cards');
});