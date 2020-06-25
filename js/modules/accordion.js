export default class AccordionList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.acClass = 'ativo';
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addEventAccordion();
    }
  }

  toggleAccordion(item) {
    item.classList.toggle(this.acClass);
    item.nextElementSibling.classList.toggle(this.acClass);
  }

  addEventAccordion() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }
}
