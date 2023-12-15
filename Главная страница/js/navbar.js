document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.navbar__item');
    var sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop - 500; // учитываем высоту navbar
            var sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Уберите класс активного элемента у всех пунктов и добавьте его только к соответствующему
                menuItems.forEach(function(item) {
                    item.classList.remove('navbar__item-active');
                });

                var targetItem = document.querySelector('[data-section="' + section.id + '"]');
                targetItem.classList.add('navbar__item-active');
            }
        });
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            var targetSection = this.getAttribute('data-section');
            var targetElement = document.getElementById(targetSection);
            var targetOffset = targetElement.offsetTop;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });

            // Уберите класс активного элемента у всех пунктов и добавьте его только к выбранному
            menuItems.forEach(function(item) {
                item.classList.remove('navbar__item-active');
            });
            this.classList.add('navbar__item-active');
        });
    });
});
