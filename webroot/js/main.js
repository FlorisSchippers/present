const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', toggleSidebar);
function toggleSidebar(e) {
     let sidebar = document.querySelector('#sidebar');
     if(sidebar.classList.contains('expanded')) {
          sidebar.classList.remove('expanded');
     } else {
          sidebar.classList.add('expanded');
     }
}
