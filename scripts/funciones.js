
  function toggleText(selector) {
    var label = document.querySelector('p[for="' + selector + '"]');
    var texto = document.querySelector('#' + selector);

    if (texto.style.display === 'none') {
      texto.style.display = 'block';
    } else {
      texto.style.display = 'none';
    }
  }

  var label = document.querySelector('p[for="parrafo1"]');
  label.addEventListener('click', function() {
    toggleText('parrafo1');
  });

  var label = document.querySelector('p[for="parrafo2"]');
  label.addEventListener('click', function() {
   toggleText('parrafo2');
  });

  var label = document.querySelector('p[for="parrafo3"]');
  label.addEventListener('click', function() {
   toggleText('parrafo3');
  });
