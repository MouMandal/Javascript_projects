

    const content = document.querySelectorAll('.content');
    const listItem = document.querySelectorAll(".warp ul li")

        listItem.forEach((item, idx) => {
        item.addEventListener('click', () => {
            hideAllContents();
            hideAllItems();


            item.classList.add('active');
            content[idx].classList.add('show');

        })
    });
    function hideAllContents() {
        content.forEach(content => {
            content.classList.remove('show')
        });
        }
    function hideAllItems() {
        listItem.forEach(item => item.classList.remove('active'))
    }



