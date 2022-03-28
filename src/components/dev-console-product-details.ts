/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 
 /**
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 @customElement('dev-console-product-details')
 export class DevConsoleProductDetails extends LitElement {
     @property({ attribute: '.productDetails' })
     productDetails:any = {}

     override render(){
         return html`
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
                        ${this.productDetails.documentations.map((doc:any)=>
                            html`
                                <div>
                                    <a href=${doc.url}>${doc.name}</a>
                                    <p>${doc.description}</p>
                                </div>
                            `    
                        )}
                    </div>
                </div>
                <div class="right-container">
                    <strong>Utilities</strong>
                </div class="product-details-utilities">
                ${this.productDetails.utilities.map((doc:any)=>
                    html`
                        <a href=${doc.url}>${doc.name}</a>
                    `    
                )}
                </div>

            </div>
         `
     }
 }

 declare global {
    interface HTMLElementTagNameMap {
      'dev-console-product-details': DevConsoleProductDetails;
    }
  }