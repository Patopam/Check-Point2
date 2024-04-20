import './components/export.ts';
import Cats, {AttributeCats}  from './components/card/card';
import { getCats } from './services/DataFetch';
import { getImg } from './services/DataImg';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const dataCats = await getCats ();
        this.render(getCats);
    }

    render(dataCats: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <app-home></app-home>
            `;
		}
		dataCats.forEach((DataCats: any) => {
			const dataCats = this.ownerDocument.createElement('app-home') as Cats;
			dataCats.setAttribute(AttributeCats.text, DataCats.text);
			this.shadowRoot?.appendChild(DataCats);
            console.log(DataCats)
		});
	}
}

customElements.define('app-container', AppContainer)

