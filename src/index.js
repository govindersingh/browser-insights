// Function to get browser info
const getBrowserInfo = () => {
    const { userAgent } = navigator;
    let browser = "Unknown";
    if (userAgent.includes("Chrome")) browser = "Chrome";
    else if (userAgent.includes("Firefox")) browser = "Firefox";
    return { name: browser, userAgent };
};

// Function to get IP
const ipAddress = () => {
    return "Working on it...";
};

// Function to get OS info
const getOSInfo = () => {
    const { platform } = navigator;
    if (platform.includes("Win")) return "Windows";
    if (platform.includes("Mac")) return "MacOS";
    return "Unknown OS";
};

// Function to get screen info
const getScreenInfo = () => ({
    width: window.screen.width,
    height: window.screen.height,
    pixelRatio: window.devicePixelRatio,
});

// Function to get URL and referrer
const getURLInfo = () => ({
    url: window.location.href,
    referrer: document.referrer,
});

// Main function to gather all info
const getAll = () => ({
    browser: getBrowserInfo(),
    ip: ipAddress(),
    os: getOSInfo(),
    screen: getScreenInfo(),
    url: getURLInfo(),
});

// For Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getAll };
}

// For the browser (via global object)
if (typeof window !== 'undefined') {
    window.browserInsights = { getAll };
}