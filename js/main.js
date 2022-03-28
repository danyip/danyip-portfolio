
const dropdownButton = document.querySelector('.dropdown-button')

dropdownButton.addEventListener('click', ()=>{
  console.log('clicked');
  document.querySelector('.dropdown-content').classList.toggle('show')
} )

window.onclick = (e)=>{
  if(!e.target.matches('.dropdown-button')){
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown=>{
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show')
        }
    })
  }
}