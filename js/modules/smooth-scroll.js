export default class SmoothScroll {
  constructor(links, options) {
    this.linksIn = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  init() {
    if (this.linksIn.length) {
      this.addEventLink();
    }
    return this;
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEventLink() {
    this.linksIn.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }
}
