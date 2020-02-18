const startBtn = document.querySelector('.start-button'),
    firstScreen = document.querySelector('.first-screen'),
    mainForm = document.querySelector('.main-form'),
    formCalculate = document.querySelector('.form-calculate'),
    total = document.querySelector('.totel'),
    endBtn = document.querySelector('.end-button'),
    fastRange = document.querySelector('.fast-range');



function showElem(elem) {
    elem.style.display = 'block';
}

function hideElem(elem) {
    elem.style.display = 'none';
}

function handlerCallBackForm(event) {
    const target = event.target;

    if (target.classList.contains('want-faster')) {
        target.checked ? showElem(fastRange) : hideElem(fastRange);
    }

    //console.log(event.target);

}


startBtn.addEventListener('click', function() {
    showElem(mainForm);
    hideElem(firstScreen);

});

endBtn.addEventListener('click', function() {
    // console.log(formCalculate.elements);

});

formCalculate.addEventListener('change', handlerCallBackForm);