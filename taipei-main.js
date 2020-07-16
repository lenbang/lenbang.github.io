var mymap = L.map('mapid').setView([25.04780, 121.53190], 2);
L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  maxZoom: 18,
  minZoom: 2,
}).addTo(mymap);

var fx = new L.PosAnimation();

L.marker([25.0552462, 121.5103212]).addTo(mymap)
  .bindPopup('Dihua Street');
L.marker([25.0379826, 121.498952]).addTo(mymap)
  .bindPopup('Lungshan Temple');
L.marker([25.0325662, 121.4993465]).addTo(mymap)
  .bindPopup('Botanic Garden');
L.marker([25.0353154, 121.5162777]).addTo(mymap)
  .bindPopup('Chiang Kai-shek Memorial Hall');
L.marker([25.0413155, 121.5314539]).addTo(mymap)
  .bindPopup('Jut Art Museum');
L.marker([25.0384555, 121.5593295]).addTo(mymap)
  .bindPopup('Taipei 101');
L.marker([25.0285432, 121.5706529]).addTo(mymap)
  .bindPopup('Xiangshan Trail to Elephant Mountain');
L.marker([25.0989206, 121.5184914]).addTo(mymap)
  .bindPopup('National Palace Museum');
L.marker([25.1116724, 121.8167034]).addTo(mymap)
  .bindPopup('Juifen Old Street');
L.marker([24.9934681, 121.57917]).addTo(mymap)
  .bindPopup('Taipei Zoo Station & Maokong Gondala');
L.marker([24.9738574, 121.5872966]).addTo(mymap)
  .bindPopup('Yinhe Cave');

//// from https://cssanimation.rocks/scroll-animations/
const callback = function (entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-hidden");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".thumbnail");
targets.forEach(function (target) {
  observer.observe(target);
});
////end https://cssanimation.rocks/scroll-animations/

$(document).ready(function () {

  mymap.flyTo([25.0384555, 121.5593295], 11, {
    duration: 6,
    easeLinearity: 0.25
  });

  $('.the-grid').magnificPopup({
    //  type: 'image',
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }

  });

  // This will create a single gallery from all elements that have class "gallery-item"
  // $('.gallery-item').magnificPopup({
  //   type: 'image',
  //   gallery: {
  //     enabled: true
  //   }
  // });
});