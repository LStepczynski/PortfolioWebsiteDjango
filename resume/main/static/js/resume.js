

const elements = Array.from(document.getElementsByClassName('special'));

function activate(element) {
    // Find the index of the clicked element
    const index = elements.indexOf(element);
    
    if (index !== -1) {
        // Remove the clicked element from the array without modifying the original array
        const elementsModified = elements.slice(0, index).concat(elements.slice(index + 1));
        elementsModified.map(element => element.style.opacity = '0.75')
    }
    element.style.color = "#00589c"
    element.style.transform = 'translateX(30px)'
    element.style.backgroundColor = '#f5f5f5'
    element.style.border = '2px solid #f5f5f5'
    element.style.borderRadius = '20px'
}

function deactivate(element) {
    // Find the index of the clicked element
    const index = elements.indexOf(element);

    if (index !== -1) {
        // Remove the clicked element from the array without modifying the original array
        const elementsModified = elements.slice(0, index).concat(elements.slice(index + 1));
        elementsModified.map(element => element.style.opacity = '1')
    }

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
