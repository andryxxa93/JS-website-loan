export default class ShowInfo {
    constructor(selectorBtn) {
        this.btns = document.querySelectorAll(selectorBtn);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
              const sibling = btn.closest('.module__info-show').nextElementSibling;
              if(sibling.classList.contains('msg')) {
                sibling.classList.remove('fadeOutUp');
                sibling.classList.add('animated');
                sibling.classList.add('fadeInDown');
                sibling.classList.remove('msg');
                sibling.style.marginTop = '20px';
              } else {
                sibling.classList.remove('fadeInDown');
                sibling.classList.add('fadeOutUp');
                setTimeout(() => {
                    sibling.classList.add('msg');
                }, 500);
            }
            });   
        });
    }
}