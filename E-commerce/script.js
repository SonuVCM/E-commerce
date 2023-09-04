// navbar js----------------------------------------------------------------------

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Newsletter js------------------------------------------------------------------

var newsEmailError = document.getElementById('newsEmailError');


function validateNewsEmail() {
    var newsEmail = document.getElementById('newsEmail').value;

    if (newsEmail.length == 0) {
        newsEmailError.innerHTML = 'Email is required'
        return false;
    }

    if (!newsEmail.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
        newsEmailError.innerHTML = 'Email Invalid'
        return false;
    }

    newsEmailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validatenNewsForm() {
    if (!validateNewsEmail()) {
        return false;
    }

    if (validateNewsEmail()) {
        alert('Sign Up Successfully')
        newsEmail.value = '';
        newsEmailError.innerHTML = '';
        return true;
    }

}


// contact js--------------------------------------------------------------

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }

    if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateSubject() {
    var subject = document.getElementById('contact-subject').value;

    if (subject.length == 0) {
        subjectError.innerHTML = 'Subject is required';
        return false;
    }

    subjectError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }

    if(validateName() || validateEmail() || validateSubject() || validateMessage()){
        alert('Send Message Successfully')
        return true;
    }
}


