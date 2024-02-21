import { updatebirthday } from './modules/birthday.js';
import { EducationCard } from './modules/educationCards.js';
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

setInterval(updateTime, 1000);
updatebirthday();

educationCards.forEach(card => {
    card.appendTo('education-cards');
});