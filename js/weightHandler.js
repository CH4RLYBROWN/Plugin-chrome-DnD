function calculPoids() {
    openItemEditSection();
    gettingInventoryWeight();
    closingInventoryItems();
}

function gettingInventoryWeight () {
    const itemsSection = document.querySelector('.widget.repeater[data-widget-id="items"]');
    const sousSection = itemsSection.firstElementChild;
    const calculator = new InventoryCalculator(sousSection);
    const totalWeight = calculator.getTotalWeight();
    console.log("Poids total de l'inventaire :", totalWeight);
    gettingMoneyWeight (totalWeight);
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
    inputChangeEvent(totalWeightInput);
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


class InventoryCalculator {
    constructor(sousSection) {
        this.sousSection = sousSection;
        this.inventoryWeight = 0;
    }

    calculateWeight(element = this.sousSection) {
        Array.from(element.children).forEach(child => {
            const firstChild = child.firstElementChild; 
            if (firstChild) {
                const secondChild = firstChild.firstElementChild;
                if (secondChild) {
                    const thirdChild = secondChild.firstElementChild;
                    if (thirdChild) {
                        const fourthChild = thirdChild.firstElementChild; 
                        if (fourthChild) {
                            const itemChild = fourthChild.children[1];
                            let numberItem = 1; // Valeur par défaut
                            if (itemChild) {
                                const inputNumberItem = itemChild.children[1];
                                if (inputNumberItem) {
                                    numberItem = Number(inputNumberItem.value) || 1; // Utilise 1 si la valeur est NaN
                                }
                            }

                            const fifthChild = fourthChild.children[2];
                            if (fifthChild) {
                                const sixthChild = fifthChild.children[1];
                                if (sixthChild) {
                                    const inputWeight = sixthChild.firstElementChild;
                                    if (inputWeight) {
                                        const weight = Number(inputWeight.value) || 0; // Utilise 0 si la valeur est NaN
                                        const realWeight = weight * numberItem;
                                        this.inventoryWeight += realWeight;
                                    } else {
                                        this.inventoryWeight += numberItem; // Si pas de poids, ajoute le nombre d'items
                                    }
                                }
                            }
                        }
                    }
                }
            }
            // Appel récursif pour traiter les enfants
            this.calculateWeight(child);
        });
    }

    getTotalWeight() {
        this.calculateWeight();
        return this.inventoryWeight;
    }
}





window.calculPoids = calculPoids;