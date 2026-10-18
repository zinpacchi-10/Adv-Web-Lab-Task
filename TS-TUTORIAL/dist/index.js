const userForm = document.querySelector('.user-form');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userCountry = document.querySelector('#country');
const userFeedback = document.querySelector('#feedback');
if (userForm && userName && userEmail) {
    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {
            username: userName.value,
            useremail: userEmail.value,
            userCountry: userCountry.value,
            userFeedback: userFeedback.value,
        };
        console.log(data);
    });
}
export {};
//# sourceMappingURL=index.js.map