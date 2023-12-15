document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('mySlider');
    var output = document.getElementById('sliderValue');
  
    output.innerHTML = slider.value; // Устанавливаем начальное значение
  
    slider.oninput = function() {
      output.innerHTML = this.value;
    };
  });
  