var faqItems = document.querySelectorAll('.faq__row__item');

faqItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var title = item.querySelector('.faq__row__title');
        var disc = item.querySelector('.faq__row__disc');
        var plusMinus = title.querySelector('p');

        if (item.classList.contains('active')) {
            plusMinus.innerText = '+';
            disc.style.opacity = 0;
            disc.style.height = 0;
            item.classList.remove('active');
        } else {
            plusMinus.innerText = '-';
            disc.style.opacity = 1;
            disc.style.height = 'auto';
            item.classList.add('active');
        }
    });
});
