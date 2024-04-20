import { getImg } from '../../services/DataImg';
import { getCats } from '../../services/DataFetch';

export enum AttributeCats {
	'text' = 'text',
    'img' = 'img',
}

class AppCard extends HTMLElement {

    text?: string;
    img?: string;

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
		this.mount();
	}

	mount() {
		this.render();
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCats, null> = {
			text: null,
			img: null,
		};
		return Object.keys(attrs);
	}

    attributeChangedCallback(propName: AttributeCats, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
    }
    

    render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <img src="${this.img}"></img>
      			<h1>${this.text}</h1>
            `;
		}
}

}


customElements.define('app-card', AppCard)
export default AppCard;
