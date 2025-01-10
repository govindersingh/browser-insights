// Function to get browser info
const getBrowserInfo = async () => {
    const { userAgent } = navigator;
    let browser = "Unknown";
    if (userAgent.includes("Chrome")) browser = "Chrome";
    else if (userAgent.includes("Firefox")) browser = "Firefox";
    return { name: browser, userAgent };
};

// Function to get IP
const ipAddress = async () => {
    return new Promise((resolve) => {
        const ipv4Set = new Set();
        const ipv6Set = new Set();
        const stunServerConfig = {
            iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        };

        try {
            const peerConnection = new RTCPeerConnection(stunServerConfig);

            peerConnection.createDataChannel("");

            peerConnection.onicecandidate = (event) => {
                if (!event.candidate) {
                    peerConnection.close();
                    const result = {
                        IPv4: Array.from(ipv4Set)[0] || null,
                        IPv6: Array.from(ipv6Set)[0] || null,
                    };
                    resolve(result);
                    return;
                }

                const candidate = event.candidate.candidate;
                const ipPattern =
                    /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b|(?:[a-fA-F0-9]{1,4}:){2,7}[a-fA-F0-9]{1,4}\b/g;

                let match;
                while ((match = ipPattern.exec(candidate)) !== null) {
                    const ip = match[0];
                    if (ip === "0.0.0.0") continue;

                    if (ip.includes(".")) {
                        ipv4Set.add(ip);
                    } else if (ip.includes(":")) {
                        ipv6Set.add(ip);
                    }
                }
            };

            peerConnection
                .createOffer()
                .then((offer) => peerConnection.setLocalDescription(offer))
                .catch(() => {
                    resolve({ IPv4: null, IPv6: null });
                });
        } catch (error) {
            resolve({ IPv4: null, IPv6: null });
        }
    });
};

// Function to get Location
const getLocation = async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
    
            // Fetch address using OpenStreetMap Nominatim
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                document.getElementById("output").innerHTML =
                  `Location: ${data.display_name}`;
              })
              .catch((error) => console.error("Error:", error));
          },
          (error) => {
            console.error("Error fetching location:", error.message);
          },
          { enableHighAccuracy: true }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
    }
};

// Function to get OS info
const getOSInfo = async () => {
    const { platform } = navigator;
    if (platform.includes("Win")) return "Windows";
    if (platform.includes("Mac")) return "MacOS";
    return "Unknown OS";
};

// Function to get screen info
const getScreenInfo = async () => ({
    width: window.screen.width,
    height: window.screen.height,
    pixelRatio: window.devicePixelRatio,
});

// Function to get URL and referrer
const getURLInfo = async () => ({
    url: window.location.href,
    referrer: document.referrer,
});

// Main function to gather all info
const getAll = async () => ({
    browser: getBrowserInfo(),
    ip: await ipAddress(),
    location: await getLocation(),
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