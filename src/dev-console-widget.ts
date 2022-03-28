/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import "./components/dev-console-products"
import "./components/dev-console-product-details"
import { gridSvg } from './assets/grid';
/**
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('dev-console-widget')
export class DevConsoleWidget extends LitElement {
  static override styles = css`
    .console-widget {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    }
    .console-widget-dropdown-menu {
      position: absolute;
      display: none;
      z-index: 20;
      left: 0;
      top: 100%;
      width: 100%;
      font-size: 0.875rem /* 14px */;
      line-height: 1.25rem /* 20px */;
      font-weight: 600;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
      cursor: default;
    }
    .console-widget:hover .console-widget-dropdown-menu {
      display: block;
    }
    .console-widget-menu-container {
      min-height: auto;
      display: flex;
      align-items: start;
      background-color: rgb(255 255 255);
      strong {
        color: rgb(0 0 0);
      }
      > * {
        margin-left: 2rem;
        height: 552px;
        overflow-y: auto;
      }
      > *:first-child {
        margin-left: 0rem;
        border-right: 1px solid rgba(152, 162, 179, 0.3);
      }
    }
  `;
 
 override connectedCallback(): void {
   super.connectedCallback()
   this.fetchData();
}
  @property()
  activeProductKey = 'apex'

  @state()
  productDetailsMap: any = {};

  async fetchData(){
    const res = await fetch(`./products-mock-jsons/${this.activeProductKey}.json`);
    const data = await res.json();
    
    this.productDetailsMap = {...this.productDetailsMap, [this.activeProductKey]: data}
  }

  override render() {
    return html`
      <div class="console-widget">
       <!-- <div> -->
        ${gridSvg}
        <!-- </div> -->
        <div class="console-widget-dropdown-menu">
          <div class="console-widget-menu-container"  @productSelect=${this._selectListener}>
            <dev-console-products></dev-console-products>

            ${this.productDetailsMap[this.activeProductKey] ? (
              html`
                <dev-console-product-details .productDetails=${this.productDetailsMap[this.activeProductKey]}></dev-console-product-details>
              `
            ):(
              html`
                <span>Loading...</span>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }

  private _selectListener(e:CustomEvent){
    this.activeProductKey = e.detail.uniqueKey;
    if(!this.productDetailsMap[this.activeProductKey]){
      this.fetchData()
    } 
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dev-console-widget': DevConsoleWidget;
  }
}
