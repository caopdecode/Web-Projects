const whoButton = document.getElementById('whoButton');
const projectButton = document.getElementById('projectButton');
const javaButton = document.getElementById('javaButton');
const mAppsButton = document.getElementById('mAppsButton');
const cppButton = document.getElementById('cppButton');
const socialButton = document.getElementById('socialButton');
const starButton = document.getElementById('starButton');
const dataButton = document.getElementById('dataButton');
const designButton = document.getElementById('designButton');
const webButton = document.getElementById('webButton');
const closeButton = document.getElementById('close');
const closeButtonPro = document.getElementById('closePro');

whoButton.addEventListener('click', function(){
    document.getElementById('Who').style.display = 'flex';
});

closeButton.addEventListener('click', function(){
    document.getElementById('Who').style.display = 'none';
});

projectButton.addEventListener('click', function(){
    document.getElementById('Projects').style.display = 'flex';
});

closeButtonPro.addEventListener('click', function(){
    document.getElementById('Projects').style.display = 'none';
});

javaButton.addEventListener('click', function(){
    window.open("https://github.com/caopdecode/Java-Projects", "_blank");
});

mAppsButton.addEventListener('click', function(){
    window.open("https://github.com/caopdecode/Mobile-Apps", "_blank");
});

cppButton.addEventListener('click', function(){
    window.open("https://github.com/caopdecode/Cpp-Projects", "_blank");
});

socialButton.addEventListener('click', function(){
    window.open("https://linktr.ee/caosoriopaez", "_blank");
});

starButton.addEventListener('click', function(){
    window.open("https://www.starasegurados.com/", "_blank");
});

dataButton.addEventListener('click', function(){
    window.open("https://www.kaggle.com/caosoriopaez31", "_blank");
});

designButton.addEventListener('click', function(){
    window.open("https://www.behance.net/caopdecode", "_blank");
});

webButton.addEventListener('click', function(){
    window.open("https://github.com/caopdecode/Web-Projects/", "_blank");
});



