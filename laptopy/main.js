
var laptopy = document.querySelectorAll('.laptop');
var sidebar = document.getElementById('sidebar');

var side1 = document.getElementById('side1');
var side2 = document.getElementById('side2');
var side3 = document.getElementById('side3');

var laptop1 = document.getElementById('jeden');
var laptop2 = document.getElementById('dwa');
var laptop3 = document.getElementById('trzy');


function wybierz(e) {
    removeShow();

    this.classList.remove('hidden');
    if (this.classList.contains('content')) {
        this.classList.remove('content');
        this.classList.add('back');
    } else {
        this.classList.remove('back');
        this.classList.add('content');
    }

    sidebar.classList.toggle('show');
    
    
}

function sidebar1() {
    if (side1.classList.contains('hidden')) {
        side1.classList.remove('hidden');
    } else {
        side1.classList.add('hidden');
    }
}

function sidebar2() {
    if (side2.classList.contains('hidden')) {
        side2.classList.remove('hidden');
    } else {
        side2.classList.add('hidden');
    }
}

function sidebar3() {
    if (side3.classList.contains('hidden')) {
        side3.classList.remove('hidden');
    } else {
        side3.classList.add('hidden');
    }
}

function removeShow() {
    laptopy.forEach(item => item.classList.toggle('hidden'));
    laptopy.forEach(item => item.classList.remove('back'));
}

laptopy.forEach(item => item.addEventListener('click',wybierz));
document.getElementById('logo').addEventListener('click', function() {location.reload()});

laptop1.addEventListener('click',sidebar1);
laptop2.addEventListener('click',sidebar2);
laptop3.addEventListener('click',sidebar3);

