declare function getPuppeteerConfig(): {
    port: number;
    xnLogin: {
        url: string;
        userName: string;
        password: string;
    };
};
export default getPuppeteerConfig;
