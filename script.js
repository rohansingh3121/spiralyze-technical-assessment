const swiperContainer = document.querySelector('.swiper-container');
const swipers = document.querySelectorAll('.swiper');
const nextBtn = document.querySelector('.swiper-nextbtn');
const prevBtn = document.querySelector('.swiper-prevbtn');
const paginationDots = document.querySelectorAll('.pagination-dot');

let currentIndex = 0;

function goToSlide(index) {
  if (index < 0 || index >= swipers.length) {
    return;
  }

  const currentSlide = swipers[currentIndex];
  const nextSlide = swipers[index];

  const translateX = -nextSlide.offsetLeft + (swiperContainer.offsetWidth - nextSlide.offsetWidth) / 2;

  swiperContainer.style.transform = `translateX(${translateX}px)`;
  currentIndex = index;

  paginationDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

nextBtn.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

paginationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('country');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
});


function handleSubmit(event) {
  event.preventDefault();
  window.location.href = 'thankyou.html';
  return false;
}


document.getElementById('playButton').addEventListener('click', function() {
  var modal = document.getElementById('videoModal');
  var video = document.getElementById('videoPlayer');
  modal.style.display = 'block';
  video.play();
});

document.getElementById('closeButton').addEventListener('click', function() {
  var modal = document.getElementById('videoModal');
  var video = document.getElementById('videoPlayer');
  modal.style.display = 'none';
  video.pause();
  video.currentTime = 0;
});

window.addEventListener('click', function(event) {
  var modal = document.getElementById('videoModal');
  var video = document.getElementById('videoPlayer');
  if (event.target == modal) {
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
  }
});