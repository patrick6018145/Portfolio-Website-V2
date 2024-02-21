import { updatebirthday } from './modules/birthday.js';
import { EducationCard } from './modules/educationCards.js';
import { updateTime } from './modules/time.js';

setInterval(updateTime, 1000);
updatebirthday();

const educationCards = [
    new EducationCard(
        'University of California, Los Angeles',
        'September 2016',
        'June 2020',
        'B.S. Computer Science',
        'I graduated from UCLA with a B.S. in Computer Science. I took a variety of courses including Data Structures, Algorithms, and Computer Networks.'
    ),
    new EducationCard(
        'University of California, Los Angeles',
        'September 2016',
        'June 2020',
        'B.A. Linguistics',
        'I also graduated from UCLA with a B.A. in Linguistics. I took a variety of courses including Phonetics, Syntax, and Semantics.'
    )
];