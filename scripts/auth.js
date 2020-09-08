


//tracking

auth.onAuthStateChanged(user =>{
    if(user){
        //get data
        db.collection('guides').get().then(snapshot => {
            setupGuides(snapshot.docs);
            setupUI(user);
        });
    } else {
        setupUI();
        setupGuides([]);
    }
})


//signup

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }).catch((error) =>{
        console.log(error);
    })
})



//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('user has sign out');
    })
})


//login

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred.user);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    }).catch((error) =>{
        console.log(error);
    })

})