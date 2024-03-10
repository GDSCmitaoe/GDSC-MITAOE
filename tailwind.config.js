/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens :{
                'max-md' : {'max': '1024px'},
            },
            colors: {
                'gdsc_red' : '#EA4335',
                'gdsc_blue' : '#4285F4',
                'gdsc_green' : '#34A853',
                'gdsc_yellow' : '#FBBC04',
                'gdsc_red1' : '#FFEBEE',
                'gdsc_blue1' : '#E3F2FD',
                'gdsc_green1' : '#E8F5E9',
                'gdsc_yellow1' : '#FFF8E1',
                'gdsc_red2' : '#FFCDD2',
                'gdsc_blue2' : '#BBDEFB',
                'gdsc_green2' : '#C8E6C9',
                'gdsc_yellow2' : '#FFECB3',
                'gdsc_red3' : '#EF9A9A',
                'gdsc_blue3' : '#90CAF9',
                'gdsc_green3' : '#A5D6A7',
                'gdsc_yellow3' : '#FFE082',
                'gdsc_red4' : '#E57373',
                'gdsc_blue4' : '#64B5F6',
                'gdsc_green4' : '#81C784',
                'gdsc_yellow4' : '#FFD54F',
                'gdsc_red5' : '#EF5350',
                'gdsc_blue5' : '#42A5F5',
                'gdsc_green5' : '#66BB6A',
                'gdsc_yellow5' : '#FFCA28',
                'gdsc_red6' : '#F44336',
                'gdsc_blue6' : '#2196F3',
                'gdsc_green6' : '#4CAF50',
                'gdsc_yellow6' : '#FFC107'
            },
            fontFamily: {
                sans: ['Google Sans', 'sans-serif'],
            },
            animation: {
                blob: "blob 7s infinite",
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "tranlate(0px, 0px) scale(1)",
                    },
                },
                moveHorizontal: {
                    "0%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                    "50%": {
                        transform: "translateX(50%) translateY(10%)",
                    },
                    "100%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                },
                moveInCircle: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                moveVertical: {
                    "0%": {
                        transform: "translateY(-50%)",
                    },
                    "50%": {
                        transform: "translateY(50%)",
                    },
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
            },
        },
    },
    plugins: [require("daisyui")],
}