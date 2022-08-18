export default class Difference {
    constructor (oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        try {
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
        } catch (e) {}
        this.oldCounter = 0;
        this.newCounter = 0;

    }

    bindTriggers(officer, items, counter) {
        try {
            officer.querySelector('.card__click').addEventListener('click', () => {
                if (counter !== 2) {
                    items[counter].style.display = 'flex';
                    counter++;
                } else {
                    items[counter].style.display = 'flex';
                    items[items.length - 1].remove();
                }
            });
        } catch (e) {}
    }

    hideCards(items) {

        try {
            items.forEach((item, i, arr) => {
                if (i != arr.length - 1) {
                    item.style.display = 'none';
                }
            });
        } catch (e) {}
    }

    init() {
        this.hideCards(this.oldItems);
        this.hideCards(this.newItems);
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    }
}