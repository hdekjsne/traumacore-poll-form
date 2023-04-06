const translation = {
  a: '',
  b: '',
  c: '',
  d: '',
  e: '',
  f: '',
  g: '',
  h: '',
  i: '',
  j: '',
  k: '',
  l: '',
  m: '',
  n: '',
  o: '',
  p: '',
  q: '',
  r: '',
  s: '',
  t: '',
  u: '',
  v: '',
  w: '',
  x: '',
  y: '',
  z: '',
  aa: '',
  bb: '',
  cc: '',
  dd: '',
  ee: '',
  ff: '',
  gg: '',
  hh: '',
  ii: '',
  jj: '',
  kk: '',
  ll: '',
  mm: '',
  nn: '',
  oo: '',
  pp: '',
  qq: '',
  rr: '',
  ss: '',
  tt: '',
  uu: '',
  vv: '',
  ww: '',
  xx: '',
  yy: '',
  zz: '',
};

const twButton = document.querySelector('.tw button');

function goToMain() {
  const tw = document.querySelector('.tw');
  const main = document.querySelector('.main');
  tw.classList.add('hidden');
  main.classList.remove('hidden');
}

twButton.addEventListener('click', goToMain);
