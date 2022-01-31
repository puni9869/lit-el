# Lit

- Version :- Lit2.0 (Released in Jan 2022)
- Backed By :- Google
- Used for :- Designing and Developing web components.
- Type :- MicroFramework.
- Capabilities :- Custom Elements, Scoped styles, Reactive properties, Declarative templates, TypeScript Support.

- Getting started :- https://lit.dev/playground/

```bash
npm install
npm start
```

# Samples :-

- Base Component :-

```js
import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  render() {
    return html`<p>Hello</p>`;
  }
}
customElements.define("hello-world", SimpleGreeting);
```

```html
<hello-world</hello-world>
```

- Adding Styles:

```js
import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`<p>Hello!</p>`;
  }
}
customElements.define("hello-world", SimpleGreeting);
```

```html
<hello-world</hello-world>
```

- Preps/Attributes :-

```js
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
    };
  }

  constructor() {
    super();
    this.name = "";
  }

  render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}
customElements.define("hello-world", SimpleGreeting);
```

```html
<hello-world name="John"></hello-world>
```
