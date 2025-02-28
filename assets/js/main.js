
const radioButtons = document.querySelectorAll('.radiobuttons__item');
radioButtons.forEach(radioBtn => {
    if (radioBtn.checked) {
        radioBtn.classList.add('active');
    }
    radioBtn.addEventListener('click', e => {
        const radioBtnsParent = radioBtn.parentNode;
        const radioBtnAll = Array.from(radioBtnsParent.children);
        radioBtnAll.forEach(btn => {
            btn.classList.remove('active')
        });
        radioBtn.classList.toggle('active')
    })
});

const $body = document.body;

const $burger = document.querySelector('.burger')
const $headerMenu = document.querySelector('.header__menu')
if ($burger) {
    $burger.addEventListener('click', () => {
        $body.classList.toggle('lock')
        $headerMenu.classList.toggle('active');
        $burger.classList.toggle('active');
    })
}

const $modalBtns = document.querySelectorAll('._modal-open');
const $modals = document.querySelectorAll('._modal');


//  f ОТКРЫТИЕ
function openModal(e) {
    $body.classList.add('lock')
    e.classList.add('_active');
}
//  f ЗАКРЫТИЕ
function closeModal(e) {
    if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
        e.target.closest('._modal').classList.remove('_active');
        $body.classList.remove('lock')
    }
}

//       ОПРЕДЕЛЕНИЕ КАКОЕ МОДАЛЬНОЕ ОКНО ОТКРЫТО. И ВЫЗОВ ОТКРЫТИЯ
// У КНОПКИ И У САМОГО МОДАЛЬНОГО ОКНА ДОЛЖНО БЫТЬ ОДИНАКОВОЕ ЗНАЧЕНИЕ В ДАТА АТРИБУТАХ
$modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;
        $modals.forEach(modal => {
            if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
                openModal(modal)
            }
        })
    })
})

// ВЫЗОВ ЗАКРЫТИЯ
$modals.forEach(modal => {
    modal.addEventListener('click', e => {closeModal(e)})
})
// ЗАКРЫТИЕ ПРИ НАЖАТИИ НА ESK
window.addEventListener('keydown', e => {
    $modals.forEach(modal => {
        if (e.key === 'Escape' && modal.classList.contains('_active')) {
            modal.classList.remove('_active');
            $body.classList.remove('lock')
        }
    })
})



const $sw = document.querySelectorAll(".modal-switch");
const $signin = document.querySelector('.signin');
const $signup = document.querySelector('.signup');
$sw.forEach(function(i) {
    i.addEventListener('click', SwitchFun)
}) 




if ($sw) {
    console.log('asdf')
}
if ($signin) {
    console.log('asdf')
}

function SwitchFun(e) {
    e.preventDefault();
    $signin.classList.toggle('visually-hidden');
    $signup.classList.toggle('visually-hidden');
}