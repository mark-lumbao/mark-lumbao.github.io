module.exports = {
  corePlugins: {
    float: false,
    table: false,
    tracking: false,
    fill: false,
    stroke: false,
    sr: false,
    cursor: false,
    appearance: false,
    select: false,
    pointer: false,
    resize: false,
    clear: false,
  },
  theme: {
    colors: {
      white: '#ffffff',
      terminalGray: '#2D3748',
      red: '#E53E3E',
      yellow: '#F6E05E',
      teal: {
        800: '#285E61',
        400: '#4FD1C5',
      },
    },
    screens: {
      sm: { max: '639px' },
      xsm: { max: '320px' },
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      heading: ['Courier Prime'],
    },
  },
  variants: {},
  plugins: [],
};
