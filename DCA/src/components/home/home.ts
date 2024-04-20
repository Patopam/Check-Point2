export enum Attribute {
	'text' = 'text',
    'img' = 'img',
}

class AppHome extends HTMLElement {

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
		const attrs: Record<Attribute, null> = {
			text: null,
			img: null,
		};
		return Object.keys(attrs);
	}


    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
    }
    

    render() {

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <h1>CAT FACTS</h1>
            <button type="button" src="<app-card></app-card>">click me</button>
            `;
		}
}

}


customElements.define('app-home', AppHome)
export default AppHome;

