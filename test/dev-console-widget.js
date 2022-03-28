/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { DevConsoleWidget } from '../dev-console-widget.js';
import { fixture, assert } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
suite('dev-console-widget', () => {
    test('is defined', () => {
        const el = document.createElement('dev-console-widget');
        assert.instanceOf(el, DevConsoleWidget);
    });
    test('renders with default values', async () => {
        const el = await fixture(html `<dev-console-widget></dev-console-widget>`);
        assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
    });
    test('renders with a set name', async () => {
        const el = await fixture(html `<dev-console-widget name="Test"></dev-console-widget>`);
        assert.shadowDom.equal(el, `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
    });
    test('handles a click', async () => {
        const el = (await fixture(html `<dev-console-widget></dev-console-widget>`));
        const button = el.shadowRoot.querySelector('button');
        button.click();
        await el.updateComplete;
        assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `);
    });
    test('styling applied', async () => {
        const el = (await fixture(html `<dev-console-widget></dev-console-widget>`));
        await el.updateComplete;
        assert.equal(getComputedStyle(el).paddingTop, '16px');
    });
});
//# sourceMappingURL=dev-console-widget.js.map