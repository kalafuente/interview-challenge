const roundedCorners = {
    medium: '4px',
}

export enum Color {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    WHITE = 'white',
    BLUE = 'blue',
    GRAYLIGHT = 'gray-light'
}

const colors = {
    [Color.SECONDARY]: '#6C8EDB',
    [Color.PRIMARY]: '#FF8800',
    [Color.WHITE]: '#FFF',
    [Color.GRAYLIGHT]: '#FAFAFA',
    [Color.BLUE]: '#4d649b',
}

/*
rems @16px
mega      40px Monserrat
huge      35px Monserrat
giant     30px Monserrat
jumbo     25px Monserrat
biggest   22px Monserrat
bigger    19px Monserrat
big       17px Open Sans
base      15px Open Sans
small     13px Open Sans
smaller   11px Open Sans
smallest  10px Open Sans
micro      9px Open Sans
*/

export enum Font {
    FAMILY_BASE = 'familyBase',
    FAMILY_TITLE = 'familyTitle',
    COLOR_DARK = 'colorDark',
    COLOR_LIGHT = 'colorLight',
}

const font = {
    familyBase: '"Open Sans", sans-serif',
    familyTitle: '"Montserrat", "Open Sans", sans-serif',
    colorDark: '#404040',
    colorLight: '#fff',
}

export enum FontSize {
    MEGA = 'mega',
    HUGE = 'huge',
    GIANT = 'giant',
    JUMBO = 'jumbo',
    BIGGEST = 'biggest',
    BIGGER = 'bigger',
    BIG = 'big',
    BASE = 'base',
    SMALL = 'small',
    SMALLER = 'smaller',
    SMALLEST = 'smallest',
    MICRO = 'micro',
}
const fontSize = {
    [FontSize.MEGA]: '2.469rem',
    [FontSize.HUGE]: '2.168rem',
    [FontSize.GIANT]: '1.905rem',
    [FontSize.JUMBO]: '1.568rem',
    [FontSize.BIGGEST]: '1.377rem',
    [FontSize.BIGGER]: '1.21rem',
    [FontSize.BIG]: '1.063rem',
    [FontSize.BASE]: '0.933rem',
    [FontSize.SMALL]: '0.82rem',
    [FontSize.SMALLER]: '0.675rem',
    [FontSize.SMALLEST]: '0.632rem',
    [FontSize.MICRO]: '0.556rem',
}

export enum FontWeight {
    LIGHT = 'light',
    NORMAL = 'normal',
    SEMIBOLD = 'semibold',
    BOLD = 'bold',
    EXTRABOLD = 'extrabold',
}
const fontWeight = {
    [FontWeight.LIGHT]: 300,
    [FontWeight.NORMAL]: 400,
    [FontWeight.SEMIBOLD]: 600,
    [FontWeight.BOLD]: 700,
    [FontWeight.EXTRABOLD]: 800,
}

export const breakpointSizes = {
    xxs: {
        min: 0,
        max: 576,
    },
    xs: {
        min: 577,
        max: 767,
    },
    sm: {
        min: 768,
        max: 991,
    },
    md: {
        min: 992,
        max: 1199,
    },
    lg: {
        min: 1200,
        max: 200000,
    },
}
export const device = {
    xs: {
        min: `(min-width: 0px)`,
        max: `(max-width: 600px)`
    },
    sm: {
        min: `(min-width: 600px)`,
        max: `(max-width: 768px)`
    },
    md: {
        min: `(min-width: 768)`,
        max: `(max-width: 992px)`
    },
    lg: {
        min: `(min-width: 992px)`,
        max: `(max-width: 1440px)`
    },

    xl: {
        min: `(min-width: 1440px)`,
        max: `(max-width: 2000px)`
    },
};

const theme = {
    roundedCorners,
    breakpointSizes,
    colors,
    font,
    fontSize,
    fontWeight,
    device
}

export default theme