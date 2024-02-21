const birthdayInYears = document.getElementById('age');
const birthday = new Date('2004, 7, 23');

export function updatebirthday() {
    const age = Math.floor((Date.now() - birthday) / 31536000000);
    birthdayInYears.innerHTML = age;
    return age;
}