import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			background: 'var(--background)',
    			foreground: {
					DEFAULT: 'var(--foreground-black)',
					yellow: 'var(--foreground-yellow)',
					black: 'var(--foreground-black)',
					gray: 'var(--foreground-gray)',
					purple: 'var(--foreground-purple)',

				},
				divider: 'var(--divider)',
				border: 'var(--border)',
    		},
    		screens: {
				'xs': '360px',
    			'3xl': '1920px'
    		},
    	}
    },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
};
export default config;
