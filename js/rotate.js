const or = window.screen.orientation;
const vp = document.querySelector('meta[name=viewport]');
const width = window.innerWidth;

function changeVW() {
  const newOr = window.screen.orientation;
  const newWidth = window.innerWidth;
  if (newOr !== or) {
    if (width < newWidth) {
      vp.setAttribute('content', 'width=900px,');
    }
  }
}

window.addEventListener('resize', changeVW);