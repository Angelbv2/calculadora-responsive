// Función para agregar valores al display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Función para borrar el display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Función para borrar el último carácter
  function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  // funcion copiar texto resultado
  function copyToClipboard() {
    const display = document.getElementById('display');
    if (display.value) {
      navigator.clipboard.writeText(display.value).then(() => {
        alert('Resultado copiado al portapapeles');
      });
    } else {
      alert('No hay nada para copiar');
    }
  }
  
  // Función para calcular el resultado
  function calculateResult() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Calculamos la expresión matemática
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  // Función para alternar entre modo claro y oscuro
  const modeToggle = document.getElementById('modeToggle');
  modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      modeToggle.textContent = '☀️';  // Cambio de icono
    } else {
      modeToggle.textContent = '🌙';
    }
  });
  