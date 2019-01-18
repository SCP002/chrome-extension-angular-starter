/*
 * Imports in this file needs to be relative for gulp build to work.
 *
 * In case if you move or rename this file, don't forget to change
 * it's path in gulpfile.js.
 */

class ContentScript {

    // Add <iframe> with SampleComponent page to the body.
    public constructor() {
        const samplePageUrl: string = chrome.runtime.getURL('index.html#/sample');

        const samplePageFrame: HTMLIFrameElement = document.createElement('iframe');
        samplePageFrame.src = samplePageUrl;

        const smaplePageFrameParent: HTMLElement = document.body;
        smaplePageFrameParent.append(samplePageFrame);

        samplePageFrame.style.border = '0';
        samplePageFrame.style.height = '60px';
        samplePageFrame.style.width = '60px';
    }

    /*
     * Use this function if you want to make <iframe> responsive.
     * Achieves effect similar to bootstrap's embeds.
     * See: https://getbootstrap.com/docs/4.2/utilities/embed/
     */
    private setResponsiveFrameStyles(parent: HTMLElement, iframe: HTMLIFrameElement): void {
        parent.style.overflow = 'hidden';
        parent.style.paddingTop = '56.25%';
        parent.style.position = 'relative';

        iframe.style.border = '0';
        iframe.style.height = '100%';
        iframe.style.left = '0';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.width = '100%';
    }

}

// tslint:disable-next-line:no-unused-expression
new ContentScript();
