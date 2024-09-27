declare module 'tailwindcss/lib/util/flattenColorPalette' {
    function flattenColorPalette(colors: object): { [key: string]: string };
    export = flattenColorPalette;
  }
  
  declare module 'mini-svg-data-uri' {
    function svgToDataUri(svg: string): string;
    export = svgToDataUri;
  }