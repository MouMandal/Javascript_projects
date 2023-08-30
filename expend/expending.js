

    const panels = document.querySelectorAll('.panel')

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('index')
        })
    }
        panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('index')
        })
    })


