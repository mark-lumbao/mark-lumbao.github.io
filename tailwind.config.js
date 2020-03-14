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
    outline: false,
    resize: false,
    clear: false,
  },
  theme: {
    colors: {
      white: '#ffffff',
      teal: {
        800: '#285E61',
        400: '#4FD1C5',
      },
    },
    screens: {
      sm: { max: '639px' },
      xsm: { max: '320px' },
    },
    fontFamily: {
      heading: ['Courier Prime'],
    },
  },
  variants: {},
  plugins: [],
};
