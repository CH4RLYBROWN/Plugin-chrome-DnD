function inputChangeEvent(element) {
    if (element) {
        element.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
        console.error("L'élément spécifié est invalide.");
    }
}

window.inputChangeEvent = inputChangeEvent;