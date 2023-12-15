function toggleActive(element) {
  // Удаляем класс active у всех элементов
  var allElements = document.querySelectorAll('.profit__func-var');
  allElements.forEach(function(el) {
      el.classList.remove('active');
  });

  // Добавляем класс active только к текущему элементу
  element.classList.add('active');
}


document.addEventListener('DOMContentLoaded', function() {
  var slider = document.getElementById('mySlider');
  var sliderText = document.getElementById('sliderText');
  var profitSlider = document.querySelector('.profit__slider');

  updateSliderValue();

  slider.addEventListener('input', function() {
      updateSliderValue();
  });

  function updateSliderValue() {
      var value = slider.value;
      sliderText.innerHTML = value;
      var percent = (value - slider.min) / (slider.max - slider.min);
      var newPosition = percent * 90 + 5 + "%"; // 90% для .slider и дополнительные 5% для центрирования текста
      profitSlider.style.left = newPosition;
  }
});
