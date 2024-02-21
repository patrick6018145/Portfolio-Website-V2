export class EducationCard {
    constructor(schoolName, startDate, endDate, major, description='') {
        this._schoolName = schoolName;
        this._startDate = startDate;
        this._endDate = endDate;
        this._major = major;
        this._description = description;
    }

    createCard() {
        const card = document.createElement('article');
        card.classList.add('education-card');

        const schoolName = document.createElement('h3');
        schoolName.textContent = this._schoolName;

        const date = document.createElement('p');
        date.textContent = `${this._startDate} - ${this._endDate}`;

        const major = document.createElement('h4');
        major.textContent = this._major;

        const description = document.createElement('p');
        description.textContent = this._description;

        card.appendChild(schoolName);
        card.appendChild(date);
        card.appendChild(major);
        card.appendChild(description);

        return card;
    }

    appendTo(parrentElement) {
        const container = documnet.getElementById(parrentElement);
        if (container) {
            const card = this.createCard();
            container.appendChild(card);
        } else {
            console.error('Parent element does not exist');
        }
    }
}