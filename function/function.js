/* Saya sudah mencoba menggunakan function eval() dan perulangan hanya saja saya coba tidak berhasil 
mungkin bila pereview tidak keberatan saya mohon bantuan untuk memberi contoh aga fungsi 
javasctipt saya lebih clean. terimakasih*/

const detail1 = document.querySelector('.detail1');
const detail2 = document.querySelector('.detail2');
const detail3 = document.querySelector('.detail3');
const detail4 = document.querySelector('.detail4');
const detail5 = document.querySelector('.detail5');
const detail6 = document.querySelector('.detail6');
const detail7 = document.querySelector('.detail7');
const detail8 = document.querySelector('.detail8');
const detail9 = document.querySelector('.detail9');
const detail10 = document.querySelector('.detail10');

const overlay = document.querySelector('.overlay');

const btnCloseDetail1 = document.querySelector('.close1');
const btnCloseDetail2 = document.querySelector('.close2');
const btnCloseDetail3 = document.querySelector('.close3');
const btnCloseDetail4 = document.querySelector('.close4');
const btnCloseDetail5 = document.querySelector('.close5');
const btnCloseDetail6 = document.querySelector('.close6');
const btnCloseDetail7 = document.querySelector('.close7');
const btnCloseDetail8 = document.querySelector('.close8');
const btnCloseDetail9 = document.querySelector('.close9');
const btnCloseDetail10 = document.querySelector('.close10');

const btnsOpenDetail1 = document.querySelector('.show-detail1');
const btnsOpenDetail2 = document.querySelector('.show-detail2');
const btnsOpenDetail3 = document.querySelector('.show-detail3');
const btnsOpenDetail4 = document.querySelector('.show-detail4');
const btnsOpenDetail5 = document.querySelector('.show-detail5');
const btnsOpenDetail6 = document.querySelector('.show-detail6');
const btnsOpenDetail7 = document.querySelector('.show-detail7');
const btnsOpenDetail8 = document.querySelector('.show-detail8');
const btnsOpenDetail9 = document.querySelector('.show-detail9');
const btnsOpenDetail10 = document.querySelector('.show-detail10');

const closeDetail1 = function () {
  detail1.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail2 = function () {
  detail2.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail3 = function () {
  detail3.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail4 = function () {
  detail4.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail5 = function () {
  detail5.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail6 = function () {
  detail6.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail7 = function () {
  detail7.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail8 = function () {
  detail8.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail9 = function () {
  detail9.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeDetail10 = function () {
  detail10.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openDetail1 = function () {
  detail1.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail2 = function () {
  detail2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail3 = function () {
  detail3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail4 = function () {
  detail4.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail5 = function () {
  detail5.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail6 = function () {
  detail6.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail7 = function () {
  detail7.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail8 = function () {
  detail8.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail9 = function () {
  detail9.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openDetail10 = function () {
  detail10.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// View detail
btnsOpenDetail1.addEventListener('click', openDetail1);
btnsOpenDetail2.addEventListener('click', openDetail2);
btnsOpenDetail3.addEventListener('click', openDetail3);
btnsOpenDetail4.addEventListener('click', openDetail4);
btnsOpenDetail5.addEventListener('click', openDetail5);
btnsOpenDetail6.addEventListener('click', openDetail6);
btnsOpenDetail7.addEventListener('click', openDetail7);
btnsOpenDetail8.addEventListener('click', openDetail8);
btnsOpenDetail9.addEventListener('click', openDetail9);
btnsOpenDetail10.addEventListener('click', openDetail10);

// close Detail by button
btnCloseDetail1.addEventListener('click', closeDetail1);
btnCloseDetail2.addEventListener('click', closeDetail2);
btnCloseDetail3.addEventListener('click', closeDetail3);
btnCloseDetail4.addEventListener('click', closeDetail4);
btnCloseDetail5.addEventListener('click', closeDetail5);
btnCloseDetail6.addEventListener('click', closeDetail6);
btnCloseDetail7.addEventListener('click', closeDetail7);
btnCloseDetail8.addEventListener('click', closeDetail8);
btnCloseDetail9.addEventListener('click', closeDetail9);
btnCloseDetail10.addEventListener('click', closeDetail10);

// close Detail by click
overlay.addEventListener('click', closeDetail1);
overlay.addEventListener('click', closeDetail2);
overlay.addEventListener('click', closeDetail3);
overlay.addEventListener('click', closeDetail4);
overlay.addEventListener('click', closeDetail5);
overlay.addEventListener('click', closeDetail6);
overlay.addEventListener('click', closeDetail7);
overlay.addEventListener('click', closeDetail8);
overlay.addEventListener('click', closeDetail9);
overlay.addEventListener('click', closeDetail10);
