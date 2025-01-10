// Import the function you want to test
const { getAll } = require('../src/index');

describe('browser-insights', () => {
    let info;

    beforeAll(async () => {
        // Fetch all information once before tests
        info = await getAll();
    });

    test('should return browser information', () => {
        try {
            expect(info.browser.name).toBeTruthy(); // Ensure browser name is returned
            expect(info.browser.userAgent).toBeTruthy(); // Ensure user agent is returned
            // console.log('✔ Browser information test passed');
        } catch (error) {
            // console.error('✖ Browser information test failed', error.message);
            throw error; // Revert only this test as failed
        }
    });

    test('should return OS information', () => {
        try {
            expect(info.os).toBeTruthy(); // Ensure OS is returned
            // console.log('✔ OS information test passed');
        } catch (error) {
            // console.error('✖ OS information test failed', error.message);
            throw error; // Revert only this test as failed
        }
    });

    test('should return IP information', () => {
        try {
            expect(info.ip).toHaveProperty('IPv4'); // Ensure IPv4 is returned
            expect(info.ip).toHaveProperty('IPv6'); // Ensure IPv6 is returned
            // console.log('✔ IP information test passed');
        } catch (error) {
            // console.error('✖ IP information test failed', error.message);
            throw error; // Revert only this test as failed
        }
    });

    test('should return screen information', () => {
        try {
            expect(info.screen).toHaveProperty('width'); // Ensure screen width is returned
            expect(info.screen).toHaveProperty('height'); // Ensure screen height is returned
            expect(info.screen).toHaveProperty('pixelRatio'); // Ensure pixel ratio is returned
            // console.log('✔ Screen information test passed');
        } catch (error) {
            // console.error('✖ Screen information test failed', error.message);
            throw error; // Revert only this test as failed
        }
    });

    test('should return URL and referrer information', () => {
        try {
            expect(info.url).toHaveProperty('url'); // Ensure URL is returned
            expect(info.url).toHaveProperty('referrer'); // Ensure referrer is returned
            // console.log('✔ URL and referrer information test passed');
        } catch (error) {
            // console.error('✖ URL and referrer information test failed', error.message);
            throw error; // Revert only this test as failed
        }
    });
});
