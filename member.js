function skillsMember() {
    let member = document.querySelector('.member');
    let memberSkills = document.querySelector('.member-skills');

    member.addEventListener('click', () => {
        memberSkills.classList.toggle('member-skills--open');
    });
}