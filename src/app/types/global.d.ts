declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module "*.svg" {
    const svg: string;
    export default svg;
}

declare const __IS_DEV__: boolean