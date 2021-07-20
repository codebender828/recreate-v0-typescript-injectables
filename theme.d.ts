import Vue from 'vue'

export interface ChakraTheme {
  "breakpoints": [
    "30em",
    "48em",
    "62em",
    "80em"
  ],
  "zIndices": {
    "hide": -1,
    "auto": "auto",
    "base": 0,
    "docked": 10,
    "dropdown": 1000,
    "sticky": 1100,
    "banner": 1200,
    "overlay": 1300,
    "modal": 1400,
    "popover": 1500,
    "skipLink": 1600,
    "toast": 1700,
    "tooltip": 1800
  },
  "radii": {
    "none": "0",
    "sm": "0.125rem",
    "md": "0.25rem",
    "lg": "0.5rem",
    "full": "9999px"
  },
  "opacity": {
    "0": "0",
    "20%": "0.2",
    "40%": "0.4",
    "60%": "0.6",
    "80%": "0.8",
    "100%": "1"
  },
  "borders": {
    "none": 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid"
  },
  "colors": {
    "transparent": "transparent",
    "current": "currentColor",
    "black": "#000",
    "white": "#fff",
    "primary": "#1a72ff",
    "secondary": "#7425f3",
    "tertiary": "#fe9e4d",
    "success": "#3ea76a",
    "warning": "#ffc61a",
    "error": "#dd3b4b",
    "whiteAlpha": {
      "50": "rgba(255, 255, 255, 0.04)",
      "100": "rgba(255, 255, 255, 0.06)",
      "200": "rgba(255, 255, 255, 0.08)",
      "300": "rgba(255, 255, 255, 0.16)",
      "400": "rgba(255, 255, 255, 0.24)",
      "500": "rgba(255, 255, 255, 0.36)",
      "600": "rgba(255, 255, 255, 0.48)",
      "700": "rgba(255, 255, 255, 0.64)",
      "800": "rgba(255, 255, 255, 0.80)",
      "900": "rgba(255, 255, 255, 0.92)"
    },
    "blackAlpha": {
      "50": "rgba(0, 0, 0, 0.04)",
      "100": "rgba(0, 0, 0, 0.06)",
      "200": "rgba(0, 0, 0, 0.08)",
      "300": "rgba(0, 0, 0, 0.16)",
      "400": "rgba(0, 0, 0, 0.24)",
      "500": "rgba(0, 0, 0, 0.36)",
      "600": "rgba(0, 0, 0, 0.48)",
      "700": "rgba(0, 0, 0, 0.64)",
      "800": "rgba(0, 0, 0, 0.80)",
      "900": "rgba(0, 0, 0, 0.92)"
    },
    "gray": {
      "50": "#F7FAFC",
      "100": "#EDF2F7",
      "200": "#E2E8F0",
      "300": "#CBD5E0",
      "400": "#A0AEC0",
      "500": "#718096",
      "600": "#4A5568",
      "700": "#2D3748",
      "800": "#1A202C",
      "900": "#171923"
    },
    "cyan": {
      "50": "#EDFDFD",
      "100": "#C4F1F9",
      "200": "#9DECF9",
      "300": "#76E4F7",
      "400": "#0BC5EA",
      "500": "#00B5D8",
      "600": "#00A3C4",
      "700": "#0987A0",
      "800": "#086F83",
      "900": "#065666"
    },
    "vue": {
      "50": "#e1fbf0",
      "100": "#c0ecda",
      "200": "#9edfc2",
      "300": "#79d0aa",
      "400": "#55c392",
      "500": "#3caa79",
      "600": "#2d845e",
      "700": "#1d5e42",
      "800": "#0c3a26",
      "900": "#001508"
    },
    "green": {
      "50": "#e2fbed",
      "100": "#c2ebd4",
      "200": "#9fddb9",
      "300": "#7ccf9e",
      "400": "#58c184",
      "500": "#3ea76a",
      "600": "#2e8251",
      "700": "#1f5d3a",
      "800": "#0f3921",
      "900": "#001506"
    },
    "orange": {
      "50": "#ffefdc",
      "100": "#ffd4ae",
      "200": "#ffba7f",
      "300": "#fe9e4d",
      "400": "#fd821b",
      "500": "#e46902",
      "600": "#b25100",
      "700": "#7f3900",
      "800": "#4e2200",
      "900": "#1f0900"
    },
    "red": {
      "50": "#ffe5e9",
      "100": "#f9bcc2",
      "200": "#ee919a",
      "300": "#e66673",
      "400": "#dd3b4b",
      "500": "#c42231",
      "600": "#991826",
      "700": "#6e101a",
      "800": "#44070e",
      "900": "#1e0001"
    },
    "yellow": {
      "50": "#fff9da",
      "100": "#ffecad",
      "200": "#ffdf7d",
      "300": "#ffd24b",
      "400": "#ffc61a",
      "500": "#e6ac00",
      "600": "#b38600",
      "700": "#806000",
      "800": "#4e3900",
      "900": "#1d1300"
    },
    "indigo": {
      "50": "#f2e5ff",
      "100": "#d2b5ff",
      "200": "#b285fa",
      "300": "#9356f7",
      "400": "#7425f3",
      "500": "#5a0cda",
      "600": "#4608aa",
      "700": "#32057b",
      "800": "#1e024c",
      "900": "#0c001e"
    },
    "pink": {
      "50": "#fff5f7",
      "100": "#fed7e2",
      "200": "#fbb6ce",
      "300": "#f687b3",
      "400": "#ed64a6",
      "500": "#d53f8c",
      "600": "#b83280",
      "700": "#97266d",
      "800": "#702459",
      "900": "#521B41"
    },
    "blue": {
      "50": "#def0ff",
      "100": "#afd0ff",
      "200": "#7db1ff",
      "300": "#4b91ff",
      "400": "#1a72ff",
      "500": "#0058e6",
      "600": "#0045b4",
      "700": "#003182",
      "800": "#001d51",
      "900": "#000a21"
    }
  },
  "letterSpacings": {
    "tighter": "-0.05em",
    "tight": "-0.025em",
    "normal": "0",
    "wide": "0.025em",
    "wider": "0.05em",
    "widest": "0.1em"
  },
  "lineHeights": {
    "normal": "normal",
    "none": "1",
    "shorter": "1.25",
    "short": "1.375",
    "base": "1.5",
    "tall": "1.625",
    "taller": "2"
  },
  "fontWeights": {
    "hairline": 100,
    "thin": 200,
    "light": 300,
    "normal": 400,
    "medium": 500,
    "semibold": 600,
    "bold": 700,
    "extrabold": 800,
    "black": 900
  },
  "fonts": {
    "heading": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    "body": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    "mono": "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
  },
  "fontSizes": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "md": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  "borderWidths": {
    "sm": "1px",
    "md": "2px",
    "lg": "4px"
  },
  "sizes": {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    "px": "1px",
    "full": "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    "xs": "20rem",
    "sm": "24rem",
    "md": "28rem",
    "lg": "32rem",
    "xl": "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "containers": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    }
  },
  "shadows": {
    "sm": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "outline": "0 0 0 3px rgba(66, 153, 225, 0.6)",
    "inner": "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    "none": "none"
  },
  "space": {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    "px": "1px"
  }
}

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    $myGlobal: string
  }
}

export interface IChakra {
  /*
   * The theme object for Chakra UI.
   */
  $chakraTheme: () => ChakraTheme
  /*
   * The color mode provider for Chakra UI.
   */
  $chakraColorMode: () => 'light' | 'dark'
  /*
   * Method to toggle the color mode between light and dark.
   */
  $toggleColorMode: () => void
}

export interface ChakraToastOptions {
  position?: 'top' | 'right' | 'bottom' | 'left'
  duration?: number
  render?: (options: { onClose?: VoidFunction, id: any }) => any
  title?: string
  description?: string
  status?: 'info' | 'warning' | 'success' | 'error'
  variant?: 'solid' | 'subtle' | 'top-accent' | 'left-accent'
  isClosable?: boolean
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/vue' {
  export interface Vue {
    /**
     * Method to toast options for Chakra UI
     */
    $toast: (options: ChakraToastOptions) => void
    /*
      * The theme object for Chakra UI.
      */
      $chakraTheme: () => ChakraTheme
      /*
        * The color mode provider for Chakra UI.
        */
      $chakraColorMode: () => 'light' | 'dark'
      /*
        * Method to toggle the color mode between light and dark.
        */
      $toggleColorMode: () => void
  }
}

