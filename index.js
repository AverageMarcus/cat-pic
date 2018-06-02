import { html, LitElement } from '@polymer/lit-element'

class CatPic extends LitElement {

  static get properties() {
    return {
      width: {
        type: String,
        attrName: 'width'
      },
      height: {
        type: String,
        attrName: 'height'
      }
    };
  }

  getURL(width, height) {
    width = (width || height || '200px').replace(/\D/g, '');
    height = (height || width || '200px').replace(/\D/g, '');

    return `https://placekitten.com/${width}/${height}`;
  }

  _render({ width, height }) {
    return html`<img src="${this.getURL(width, height)}" alt="Picture of a cat" title="Cute cat" />`;
  }

}

customElements.define('cat-pic', CatPic);
