import Config from '../config/getConfig.js'

function getPuppeteerConfig() {
    const { puppeteerConfig } = Config.getYamlConfig()
    return puppeteerConfig
}


export default getPuppeteerConfig