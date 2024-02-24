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

export class CertificationCard extends Card {
    constructor(title, date, description='', link, imageSrc) {
        super(title, description);
        this._date = date;
        this._link = link;
        this._imageSrc = imageSrc;
    }

    createCard() {
        const card = super.createCard('certification-card');

        const image = document.createElement('img');
        image.src = this._imageSrc;
        card.appendChild(image);

        const certificationCardText = document.createElement('div');
        certificationCardText.classList.add('certification-card-text');
        card.appendChild(certificationCardText);

        const title = card.querySelector('div.certification-card-title-row');
        certificationCardText.insertBefore(title, certificationCardText.firstChild);

        const date = document.createElement('p');
        date.textContent = this._date;
        title.appendChild(date);

        const description = card.querySelector('p');
        certificationCardText.insertBefore(description, certificationCardText.secondChild);

        const link = document.createElement('a');
        link.href = this._link;
        link.target = '_blank';
        link.textContent = 'Bekijk certificaat';
        certificationCardText.appendChild(link);

        return card;
    }

}

export class ProjectCard extends Card {
    constructor(title, description, link, linkText, imageSrc='') {
        super(title, description);
        this._link = link;
        this._linkText = linkText;
        this._imageSrc = imageSrc;
    }

    createCard() {
        const card = super.createCard('project-card');

        const image = document.createElement('img');
        image.src = this._imageSrc;
        card.appendChild(image);

        const projectCardText = document.createElement('div');
        projectCardText.classList.add('project-card-text');
        card.appendChild(projectCardText);

        const title = card.querySelector('div.project-card-title-row');
        projectCardText.insertBefore(title, projectCardText.firstChild);

        const description = card.querySelector('p');
        projectCardText.insertBefore(description, projectCardText.secondChild);

        const link = document.createElement('a');
        link.href = this._link;
        link.target = '_blank';
        link.textContent = this._linkText;
        projectCardText.appendChild(link);

        return card;
    }
}

export class SkillCard {
    constructor(title, icon, iconType='fa-brands') {
        this._title = title;
        this._icon = icon;
        this._iconType = iconType;
    }

    createCard() {
        const card = document.createElement('article');
        card.classList.add('skill-card');

        const title = document.createElement('h3');
        title.textContent = this._title;
        card.appendChild(title);

        const icon = document.createElement('i');
        icon.classList.add(`${this._iconType}`, `${this._icon}`); //fa-
        card.appendChild(icon);

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