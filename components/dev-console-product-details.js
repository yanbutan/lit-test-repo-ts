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
import { customElement, property } from 'lit/decorators.js';
/**
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let DevConsoleProductDetails = class DevConsoleProductDetails extends LitElement {
    constructor() {
        super(...arguments);
        this.productDetails = {};
    }
    render() {
        return html `
            <div class="product-details-container">
                <div class="left-container">
                    <div class="product-details-description">
                        <strong>Learn about the Products</strong>
                        <p>${this.productDetails.description}</p>
                        <a>${`Find out more about ${this.productDetails.name}`}</a>
                    </div>
                    <div class="product-details-technical-doc">
                        <strong>Technical Documentation</strong>
                    </div>
                        ${this.productDetails.documentations.map((doc) => html `
                                <div>
                                    <a href=${doc.url}>${doc.name}</a>
                                    <p>${doc.description}</p>
                                </div>
                            `)}
                    </div>
                </div>
                <div class="right-container">
                    <strong>Utilities</strong>
                </div class="product-details-utilities">
                ${this.productDetails.utilities.map((doc) => html `
                        <a href=${doc.url}>${doc.name}</a>
                    `)}
                </div>

            </div>
         `;
    }
};
__decorate([
    property({ attribute: '.productDetails' })
], DevConsoleProductDetails.prototype, "productDetails", void 0);
DevConsoleProductDetails = __decorate([
    customElement('dev-console-product-details')
], DevConsoleProductDetails);
export { DevConsoleProductDetails };
//# sourceMappingURL=dev-console-product-details.js.map