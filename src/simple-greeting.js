import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static get properties() {
    return {
      name: { type: String },
      data: {
        type: String,
        hasChanged: (value, oldValue) => {
          console.log("has changed", oldValue, value);
          return oldValue === value;
        },
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.name = '';
    this.data = "";
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  keyup(evt) {
    if (evt.target.value) {
      return false;
    }
    console.log(evt.target.value);
  }

  render() {
    return html`
      <p>Hello ${this.data}!</p> 
      <input @keyup="${this.keyup}" type="text" .value="${this.data}">
    `;
  }
}
customElements.define("hello-world", SimpleGreeting);