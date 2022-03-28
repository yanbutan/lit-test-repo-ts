/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class DevConsoleProductDetails extends LitElement {
    productDetails: any;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dev-console-product-details': DevConsoleProductDetails;
    }
}
//# sourceMappingURL=dev-console-product-details.d.ts.map