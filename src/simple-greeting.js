import { html, css, LitElement } from "lit";


function emitter(data) {
  console.log("Emitted", data.detail);
}

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static get properties() {
    return {
      name: { type: String },
      data: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.name = '';
    this.data = "";
    this.emitter = emitter.bind(this);
    document.addEventListener("emit", this.emitter, { passive: true });

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("emit", this.emitter);
  }

  clicked(evt) {
    if (!evt) {
      return false;
    }
    document.dispatchEvent(
      new CustomEvent("emit", { detail: { value: 'Hello' } })
    );
  }

  render() {
    return html`
      <p>Hello ${this.data}!</p> 
      <button @click="${this.clicked}"> Click !! </button>
    `;
  }
}
customElements.define("hello-world", SimpleGreeting);
