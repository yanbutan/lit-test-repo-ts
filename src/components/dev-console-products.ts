/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html} from 'lit';
 import {customElement} from 'lit/decorators.js';
 import { products } from '../staticData/products';
 /**
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('dev-console-products')
 export class DevConsoleProducts extends LitElement {
     override render(){
         return html`
            <div class="products-container">
                <strong>Browse Products</strong>
                <ul class="products-list-container">
                ${products.map((product) =>
                    html`
                        <li value=${product.uniqueKey} class="products-item" @click=${()=>this._dispatchSelect(product.uniqueKey)}>
                        ${product.svg}    
                        ${product.name}
                        </li>
                    `
                )}
                </ul>
            </div>
         `
     }

     private _dispatchSelect(uniqueKey:string) {
        if (uniqueKey) {
          const options = {
            detail: {uniqueKey},
            bubbles: true,
            composed: true
          };
          this.dispatchEvent(new CustomEvent('productSelect', options));
        }
      }
    
 }

 declare global {
    interface HTMLElementTagNameMap {
      'dev-console-products': DevConsoleProducts;
    }
  }