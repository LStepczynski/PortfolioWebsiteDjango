

const elements = Array.from(document.getElementsByClassName('special'));

function activate(element) {
    element.style.color = "#00589c"
    element.style.transform = 'translateX(30px)'
    element.style.backgroundColor = '#f5f5f5'
    element.style.border = '2px solid #f5f5f5'
    element.style.borderRadius = '20px'
}

function deactivate(element) {
    element.style.color = ""
    element.style.transform = 'translateX(0px)'
    element.style.backgroundColor = ''
    element.style.border = ''
    element.style.borderRadius = ''
}

// Add event listeners to each element
elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        activate(element);
    });
    element.addEventListener('mouseleave', () => {
        deactivate(element);
    });
});
