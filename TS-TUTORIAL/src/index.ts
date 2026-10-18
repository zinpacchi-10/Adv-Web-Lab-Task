const userForm = document.querySelector<HTMLFormElement>('.user-form');
const userName = document.querySelector('#name') as HTMLInputElement;
const userEmail = document.querySelector('#email') as HTMLInputElement;

const userCountry = document.querySelector('#country') as HTMLSelectElement;

const userFeedback = document.querySelector('#feedback') as HTMLTextAreaElement;

if (userForm && userName && userEmail) {
  userForm.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    const data = {
      username: userName.value,
      useremail: userEmail.value,
      userCountry: userCountry.value,
      userFeedback:userFeedback.value,
    };

    console.log(data);
  });
}
