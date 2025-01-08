// Import the function you want to test
const { getAll } = require('../src/index');

describe('browser-insights', () => {
    test('should return browser information', () => {
        const info = getAll();
        expect(info.browser.name).toBeTruthy();  // Ensure browser name is returned
        expect(info.browser.userAgent).toBeTruthy();  // Ensure user agent is returned
    });

    test('should return OS information', () => {
        const info = getAll();
        expect(info.os).toBeTruthy();  // Ensure OS is returned
    });

    test('should return IP information', () => {
        const info = getAll();
        expect(info.ip).toBeTruthy();  // Ensure IP is returned
    });

    test('should return screen information', () => {
        const info = getAll();
        expect(info.screen).toHaveProperty('width');  // Ensure screen width is returned
        expect(info.screen).toHaveProperty('height');  // Ensure screen height is returned
        expect(info.screen).toHaveProperty('pixelRatio');  // Ensure pixel ratio is returned
    });

    test('should return URL and referrer information', () => {
        const info = getAll();
        expect(info.url).toHaveProperty('url');  // Ensure URL is returned
        expect(info.url).toHaveProperty('referrer');  // Ensure referrer is returned
    });
});
