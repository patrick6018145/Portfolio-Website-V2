class Card {
    constructor(title, description) {
        this._title = title;
        this._description = description;
    }

    createCard(cardClass) {
        const card = document.createElement('article');
        card.classList.add(cardClass);

        const titleRow = document.createElement('div');
        titleRow.classList.add(`${cardClass}-title-row`);
        card.appendChild(titleRow);

        const title = document.createElement('h3');
        title.textContent = this._title;
        titleRow.appendChild(title);

        const description = document.createElement('p');
        description.textContent = this._description;
        card.appendChild(description);

        return card;
    }

    appendTo(parentElement, cardClass) {
        const container = document.getElementById(parentElement);
        if (container) {
            const card = this.createCard(cardClass);
            container.appendChild(card);
        } else {
            console.error('Parent element does not exist');
        }
    }
}

export class EducationCard extends Card {
    constructor(title, startDate, endDate, major, description='') {
        super(title, description);
        this._startDate = startDate;
        this._endDate = endDate;
        this._major = major;
    }

    createCard() {
        const card = super.createCard('education-card');

        const titleRow = card.querySelector('.education-card-title-row');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('education-card-header');
        card.appendChild(cardHeader);

        const date = document.createElement('p');
        date.textContent = `${this._startDate} - ${this._endDate}`;
        titleRow.appendChild(date);

        cardHeader.appendChild(titleRow);

        const major = document.createElement('h4');
        major.textContent = this._major;
        cardHeader.appendChild(major);

        return card;
    }
}

export class ProjectCard extends Card {
    constructor(title, description, link, imageSrc='') {
        super(title, description);
        this._link = link;
        this._imageSrc = imageSrc;
    }

    createCard() {
        const card = super.createCard('project-card');

        const titleRow = card.querySelector('.project-card-header');

        const link = document.createElement('a');
        link.href = this._link;
        link.target = '_blank';
        link.textContent = 'Bekijk project';
        card.appendChild(link);

        const image = document.createElement('img');
        image.src = this._imageSrc;
        card.appendChild(image);

        return card;
    }
}