const modalButtons = document.querySelectorAll('button.modal');

modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const relativeContainer = button.closest('.relative');

        const bodyElement = relativeContainer.querySelector('.body');

        if (bodyElement.style.display === 'none') {
            bodyElement.style.display = 'block';
        } else {
            bodyElement.style.display = 'none';
        }
    });
});


const links = document.querySelectorAll('.a_');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const extraContainer = this.nextElementSibling;

            if (extraContainer.style.display === 'none') {
                extraContainer.style.display = 'block';
            } else {
                extraContainer.style.display = 'none';
            }
        });
    });