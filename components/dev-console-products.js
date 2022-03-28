/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { products } from '../staticData/products';
/**
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let DevConsoleProducts = class DevConsoleProducts extends LitElement {
    render() {
        return html `
            <div class="products-container">
                <strong>Browse Products</strong>
                <ul class="products-list-container">
                ${products.map((product) => html `
                        <li value=${product.uniqueKey} class="products-item" @click=${() => this._dispatchSelect(product.uniqueKey)}>
                        ${product.svg}    
                        ${product.name}
                        </li>
                    `)}
                </ul>
            </div>
         `;
    }
    _dispatchSelect(uniqueKey) {
        if (uniqueKey) {
            const options = {
                detail: { uniqueKey },
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('productSelect', options));
        }
    }
};
DevConsoleProducts = __decorate([
    customElement('dev-console-products')
], DevConsoleProducts);
export { DevConsoleProducts };
//# sourceMappingURL=dev-console-products.js.map