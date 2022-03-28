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
export declare class DevConsoleProducts extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    private _dispatchSelect;
}
declare global {
    interface HTMLElementTagNameMap {
        'dev-console-products': DevConsoleProducts;
    }
}
//# sourceMappingURL=dev-console-products.d.ts.map