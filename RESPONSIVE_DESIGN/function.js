const ShowAside = document.getElementById('ShowAside');
const AsidetHider = document.getElementById('AsidetHider');

ShowAside.addEventListener('click', () => {
    console.warn('habla rinu');
    AsidetHider.classList.remove('AsideVisiblity');
})

AsidetHider.addEventListener('click', () => {
    console.warn('dhabla rinu');
    AsidetHider.classList.add('AsideVisiblity');
})