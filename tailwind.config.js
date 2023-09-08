/** @type {Plugin|{}} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            transitionProperty: {
                'top': 'top'
            }
        },
        colors: {
            'auth': '#E3EED5',
            'danger': '#F32013',
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
            primary: {
                light: '#ffffff',
                dark: '#23272F',
            },
            black: '#000000',
            gray: {
                dark: '#6e7681',
                light: '#f6f6f6',
            },
            yellow: '#ffbf00',
            green: '#61c265',
            'mexican-red': {
                DEFAULT: '#9F2A2A',
                50: '#F8EBE4',
                100: '#F2D7CC',
                200: '#E5AC9C',
                300: '#D87B6C',
                400: '#CB463B',
                500: '#9F2A2A',
                600: '#83232A',
                700: '#661B26',
                800: '#4A1420',
                900: '#2E0C16'
            },
            error: "#D5390D",
            'pale-sky': {
                '50': '#f5f6f6',
                '100': '#e5e7e8',
                '200': '#cdd0d4',
                '300': '#aab0b6',
                '400': '#7f8691',
                '500': '#6e7681',
                '600': '#565b64',
                '700': '#4a4e54',
                '800': '#414449',
                '900': '#393b40',
                '950': '#232429',
            },
            radial: "#FFA883",
            greyDarkBlue: "#222E56",
            raspberry: "#FF00B84D",
            bluewhite: "#0038FF4D",
            raspberryfull: "rgba(255,0,184,0.5)",
            footer: "rgba(255,0,184,0.1)"
        }
    },
    plugins: [],
}

