const imgs = Array.from(document.querySelectorAll('.album-grid .photo-item img')).map(i => i.src);
let imgr = 0;
function openLb(i) {
  imgr = i;
  document.getElementById('lb-img').src = imgs[imgr];
  document.getElementById('lb-counter').textContent = (imgr + 1) + ' / ' + imgs.length;
  document.getElementById('lb').classList.add('open');
}
function closeLb() { document.getElementById('lb').classList.remove('open'); }
function lbMove(dir) {
  imgr = (imgr + dir + imgs.length) % imgs.length;
  document.getElementById('lb-img').src = imgs[imgr];
  document.getElementById('lb-counter').textContent = (imgr + 1) + ' / ' + imgs.length;
}