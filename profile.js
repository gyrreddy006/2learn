const profileForm = document.getElementById('profileForm');
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');

function loadProfile() {
  profileName.value = localStorage.getItem('profileName') || '';
  profileEmail.value = localStorage.getItem('profileEmail') || '';
}

profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('profileName', profileName.value);
  localStorage.setItem('profileEmail', profileEmail.value);
  alert('Profile updated!');
});

loadProfile();
