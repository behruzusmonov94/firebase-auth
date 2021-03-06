const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelector('.logged-out');
const loggedInLinks = document.querySelector('.logged-in');

const setupUI = (user) => {
    if(user){
        //toggle UI elements
        loggedOutLinks.style.display = 'block';
        loggedOutLinks.style.display = 'none';
        

    } else {

        loggedOutLinks.style.display = 'none';
        loggedOutLinks.style.display = 'block';

    }

}

//setup guides

const setupGuides = (data) =>{

    if(data.length){
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            const li = `
                <li>
                    <div class="collapsible-header grey lighten-4">${guide.title}</div>
                    <div class="collapsible-body white">${guide.content}</div>
                </li>
            `;
            html += li;
        });
        guideList.innerHTML = html;

    } else {
        guideList.innerHTML = '<h5 class="center-align"> Login to view guides </h5>'
    }

}



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });


