// index.js
const getBrowserInfo = () => {
    const { userAgent } = navigator;
    let browser = "Unknown";
    if (userAgent.includes("Chrome")) browser = "Chrome";
    else if (userAgent.includes("Firefox")) browser = "Firefox";
    return { name: browser, userAgent };
};
  
const getOSInfo = () => {
    const { platform } = navigator;
    if (platform.includes("Win")) return "Windows";
    if (platform.includes("Mac")) return "MacOS";
    return "Unknown OS";
};
  
const getScreenInfo = () => ({
    width: window.screen.width,
    height: window.screen.height,
    pixelRatio: window.devicePixelRatio,
});
  
const getURLInfo = () => ({
    url: window.location.href,
    referrer: document.referrer,
});
  
const getAll = () => ({
    browser: getBrowserInfo(),
    os: getOSInfo(),
    screen: getScreenInfo(),
    url: getURLInfo(),
});
  
module.exports = { getAll };
  