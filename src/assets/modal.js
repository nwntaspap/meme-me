class Form {
  element = document.createElement('form');
  heading = document.createElement('h2');
  closeButton = document.createElement('button');

  constructor(type, title, content) {
    if (type === 'dialog') {
      this.element.method = 'dialog';
    }

    this.heading.textContent = title;
    this.element.appendChild(this.heading);

    // This is the magic part: it takes whatever
    // HTML you give it and wraps it in the form.
    this.element.appendChild(content);

    this.closeButton.textContent = 'Close';
    this.closeButton.type = 'submit';
    this.element.appendChild(this.closeButton);
  }
}

export class Modal {
  openButton = document.createElement('button');
  dialog = document.createElement('dialog');

  constructor(name, parentElement, contentElement) {
    this.name = name;
    this.parent = parentElement;
    this.content = contentElement;

    this.#setupForm();
  }

  #setupForm() {
    const article = document.createElement('article');
    // Pass the unique name and content to the Form
    const form = new Form('dialog', this.name, this.content);

    article.appendChild(form.element);
    this.dialog.appendChild(article);
  }

  render() {
    // We use 'this.name' so each button has unique text
    this.openButton.textContent = this.name;
    this.parent.appendChild(this.openButton);

    // We append 'this.dialog' specifically
    document.body.appendChild(this.dialog);

    this.openButton.addEventListener('click', () => {
      this.dialog.showModal();
    });
  }
}
