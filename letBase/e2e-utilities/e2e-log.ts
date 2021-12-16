// -----------------------------------------------------------------------
// <copyright company='Microsoft Corporation'>
//   Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import { browser, element } from 'protractor';

export function log(message: string) {
    return browser.driver.call(() => {
        // tslint:disable-next-line:no-console
        console.log(new Date() + ' ' + message);
       
    });
}