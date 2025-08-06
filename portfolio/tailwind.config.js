/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Space Theme Color Palette
        space: {
          navy: '#0A192F',
          black: '#00001a',
          purple: '#4a2a69',
          teal: '#64FFDA',
          silver: '#CCD6F6',
          grey: '#8892B0',
          gold: '#FFC300',
          'glow-blue': '#64FFDA80',
          'constellation': '#4a2a6950',
        },
        // Semantic color mapping
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'cursor-blink': 'cursorBlink 1s infinite',
        'constellation': 'constellation 8s ease-in-out infinite',
        'nebula-drift': 'nebulaDrift 15s linear infinite',
        'warp-speed': 'warpSpeed 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(100, 255, 218, 0.6)',
            transform: 'scale(1.02)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        cursorBlink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#64FFDA' },
        },
        constellation: {
          '0%, 100%': { 
            transform: 'translateX(0) translateY(0) rotate(0deg)',
            opacity: '0.5',
          },
          '25%': { 
            transform: 'translateX(5px) translateY(-5px) rotate(1deg)',
            opacity: '0.8',
          },
          '50%': { 
            transform: 'translateX(-3px) translateY(8px) rotate(-1deg)',
            opacity: '1',
          },
          '75%': { 
            transform: 'translateX(7px) translateY(2px) rotate(0.5deg)',
            opacity: '0.6',
          },
        },
        nebulaDrift: {
          '0%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) translateY(-50%) rotate(360deg)' },
        },
        warpSpeed: {
          '0%': { 
            transform: 'scale(1) translateZ(0)',
            filter: 'blur(0px)',
          },
          '50%': { 
            transform: 'scale(1.1) translateZ(100px)',
            filter: 'blur(2px)',
          },
          '100%': { 
            transform: 'scale(1) translateZ(0)',
            filter: 'blur(0px)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space-gradient': 'linear-gradient(135deg, #0A192F 0%, #00001a 50%, #4a2a69 100%)',
        'nebula-gradient': 'radial-gradient(ellipse at center, #4a2a69 0%, transparent 70%)',
        'star-gradient': 'radial-gradient(circle at center, #64FFDA 0%, transparent 2px)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(100, 255, 218, 0.3)',
        'glow-lg': '0 0 40px rgba(100, 255, 218, 0.4)',
        'glow-xl': '0 0 60px rgba(100, 255, 218, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(100, 255, 218, 0.2)',
        'cosmic': '0 0 0 1px rgba(100, 255, 218, 0.2), 0 4px 16px rgba(74, 42, 105, 0.3)',
      },
      blur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          textShadow: '0 0 10px rgba(100, 255, 218, 0.8)',
        },
        '.text-glow-lg': {
          textShadow: '0 0 20px rgba(100, 255, 218, 1)',
        },
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-dark': {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.cosmic-border': {
          border: '1px solid',
          borderImage: 'linear-gradient(45deg, #64FFDA, #4a2a69, #FFC300) 1',
        },
      });
    },
  ],
};