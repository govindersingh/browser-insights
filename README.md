
# Browser Insights

**Browser Insights** is a lightweight JavaScript library that captures essential client-side information such as browser details, operating system, screen dimensions, network type, and more. This package is ideal for analytics, debugging, or personalizing user experiences.

---

## Features

- 🖥️ **Browser Details**: Captures browser name, version, and user agent.
- 📱 **Device & OS Info**: Identifies operating system and device type.
- 🖼️ **Screen Details**: Provides screen resolution and pixel ratio.
- 🌐 **Network Information**: Detects network type (Wi-Fi, 4G, etc.).
- 🔗 **URL & Referrer**: Tracks the current page URL and referring page.
- 🚀 Lightweight and dependency-free.

---

## Installation

To install `browser-insights`, use npm:

```bash
npm install browser-insights
```

---

## Usage

Import and use `browser-insights` to capture client-side information:

### Example: Capturing All Client Info
```javascript
const browserInsights = require('browser-insights');

// Capture all available information
const info = browserInsights.getAll();
console.log(info);

/* Example Output:
{
  browser: { name: "Chrome", version: "115", userAgent: "..." },
  os: { name: "Windows", version: "11" },
  screen: { width: 1920, height: 1080, pixelRatio: 2 },
  network: { type: "Wi-Fi" },
  url: { current: "https://example.com", referrer: "https://google.com" }
}
*/
```

### Example: Logging Custom Events
You can also use it to log custom events for debugging or analytics purposes:

```javascript
browserInsights.logEvent('Button Clicked', { buttonId: 'signup' });
```

---

## API Documentation

### `getAll()`
Returns all available client-side information in a structured format.

### `getBrowserInfo()`
Returns detailed browser information:
- `name`: Browser name (e.g., Chrome, Firefox).
- `version`: Browser version.
- `userAgent`: Full user agent string.

### `getOSInfo()`
Returns information about the operating system:
- `name`: Operating system name (e.g., Windows, macOS, Linux).
- `version`: OS version (if available).

### `getScreenInfo()`
Returns screen-related information:
- `width`: Screen width in pixels.
- `height`: Screen height in pixels.
- `pixelRatio`: Device pixel ratio.

### `getNetworkInfo()`
Returns network-related information (if supported by the browser):
- `type`: Network type (e.g., Wi-Fi, 4G).

### `getURLInfo()`
Returns the current page's URL and the referrer:
- `current`: Current page URL.
- `referrer`: Referring page URL.

---

## Browser Insights CDN

You can use **Browser Insights** directly via a CDN. Include the following `<script>` tag in your HTML:

### Using jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/browser-insights@1.2.0/browser-insights.min.js"></script>
or
<script src="https://unpkg.com/browser-insights@1.2.0/browser-insights.min.js"></script>
```

### Once included, you can use the library like this:

```javascript
(async () => {
  const data = await browserInsights.getAll();
  console.log(data);
})();
```

---

## Why Use Browser Insights?

- **Easy Integration**: Works seamlessly in any frontend project.
- **Comprehensive Data**: Provides accurate and useful client-side insights.
- **Enhances User Experience**: Helps tailor experiences based on user environment.
- **Debugging**: Simplifies troubleshooting for developers.

---

## Roadmap

Here's what we plan to add in future versions:
- 🌍 **Geolocation Support**: Optional and privacy-safe geolocation data.
- 🌐 **Language Support**: Capture browser language and localization info.
- 📊 **Custom Analytics Reporting**: Built-in reporting for common analytics needs.

---

## Contributing

Contributions are always welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Open a pull request.

Please follow the coding standards outlined in the repository.

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute it under the terms of the license. See the [LICENSE](LICENSE) file for more details.

---

## Feedback and Support

If you encounter any issues or have suggestions, feel free to [open an issue](https://github.com/govindersingh/browser-insights/issues) or reach out at:

📧 Email: `govindersingh0595@gmail.com`

We’d love to hear your feedback and ideas!

---

## Repository Links

- **GitHub Repository**: [Browser Insights](https://github.com/govindersingh/browser-insights)
- **npm Package**: [browser-insights](https://www.npmjs.com/package/browser-insights)
