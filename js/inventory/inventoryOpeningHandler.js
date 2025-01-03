function openItemEditSection() {
    const itemsSection = document.querySelector('.widget.repeater[data-widget-id="items"]');
    const sousSection = itemsSection.firstElementChild;

    Array.from(sousSection.children).forEach(child => {
        const firstChild = child.firstElementChild; 
        if (firstChild) {
            const secondChild = firstChild.children[1];
            if (secondChild && secondChild.classList.contains('read-options')) {
                const buttonDiv = secondChild.firstElementChild;
                if (buttonDiv) {
                    const buttonEdit = buttonDiv.firstElementChild;
                    buttonEdit.click(); 
                }
                
            }
        }
    });
}

window.openItemEditSection = openItemEditSection;