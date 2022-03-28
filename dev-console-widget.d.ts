/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import "./components/dev-console-products";
import "./components/dev-console-product-details";
/**
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class DevConsoleWidget extends LitElement {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    activeProductKey: string;
    productDetailsMap: any;
    fetchData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    private _selectListener;
}
declare global {
    interface HTMLElementTagNameMap {
        'dev-console-widget': DevConsoleWidget;
    }
}
//# sourceMappingURL=dev-console-widget.d.ts.map