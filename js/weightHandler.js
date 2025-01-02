function calculPoids() {
    openItemEditSection();
    gettingInventoryWeight();
    closingInventoryItems();
}

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

function gettingInventoryWeight () {
    const itemsSection = document.querySelector('.widget.repeater[data-widget-id="items"]');
    const sousSection = itemsSection.firstElementChild;
    let inventoryWeight = 0;
    let numberItem = 0;

    Array.from(sousSection.children).forEach(child => {
        const firstChild = child.firstElementChild; 
        if (firstChild) {
            const secondChild = firstChild.firstElementChild;
            if (secondChild) {
                const thirdChild = secondChild.firstElementChild;
                if (thirdChild) {
                    const fourthChild = thirdChild.firstElementChild; 
                    if(fourthChild){
                        const itemChild = fourthChild.children[1];
                        if(itemChild){
                            const inputNumberItem = itemChild.children[1];
                            if (inputNumberItem) {
                                numberItem = Number(inputNumberItem.value);
                            } else {
                                numberItem = 1;
                            }
                        };
                        const fifthChild = fourthChild.children[2];
                        if(fifthChild) {
                            const sixthChild = fifthChild.children[1];
                            if(sixthChild){
                                const inputWeight = sixthChild.firstElementChild;
                                if(inputWeight) {
                                    if (inputWeight.value){
                                        const weight = Number(inputWeight.value);
                                        const realWeight = weight * numberItem;
                                        inventoryWeight = inventoryWeight + realWeight;
                                    } else {
                                        inventoryWeight = inventoryWeight + numberItem;
                                    }
                                }

                            }
                        }
                    }
                }
                
            }
        }
    });

    gettingMoneyWeight (inventoryWeight);
}

function gettingMoneyWeight (inventoryWeight) {
    const moneyDiv = document.querySelector('[data-widget-id="pgpglwdv"]');
    let coinNumber = 0;
    let moneyWeight = 0;
    Array.from(moneyDiv.children).forEach(child => {
        const inputMoney = child.children[1];
        if (inputMoney){
            coinNumber = Number(inputMoney.value) + coinNumber;
        }
    });
    moneyWeight = coinNumber * 0.01;
    totalWeight(moneyWeight, inventoryWeight);

}

function totalWeight (moneyWeight, inputWeight) {
    const totalWeightInput = document.querySelector('[data-widget-id="umtpsxyk"]');
    let totalWeight = moneyWeight + inputWeight;
    totalWeightInput.value = totalWeight.toFixed(2);
    totalWeightInput.dispatchEvent(getFakeEnterPress());
    setTotalWeight(totalWeight);
    
}


function closingInventoryItems () {
    const itemsSection = document.querySelector('.widget.repeater[data-widget-id="items"]');
    const sousSection = itemsSection.firstElementChild;

    Array.from(sousSection.children).forEach(child => {
        const firstChild = child.children[1];
        if (firstChild){
            const secondChild = firstChild.firstElementChild;
            if (secondChild){
                const buttonClose = secondChild.children[1];
                buttonClose.click();
            }
        }
    });
}




window.calculPoids = calculPoids;
window.openItemEditSection = openItemEditSection;