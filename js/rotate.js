const vp = document.querySelector('meta[name=viewport]');
const width = window.visualViewport.width;

function changeVW() {
  const newWidth = window.visualViewport.width;
  if (width < newWidth) {
    vp.setAttribute('content', 'width=900px');
  }
  if (width > newWidth) {
    vp.setAttribute('content', 'width=device-width');
  }
}

window.addEventListener('resize', changeVW);