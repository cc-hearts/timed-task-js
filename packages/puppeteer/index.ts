import express from 'express'
import { logger } from '@repo/utils'
import { Config } from '@repo/config'

const app = express()

const { puppeteerConfig } = Config.getYamlConfig()
const { port } = puppeteerConfig

app.listen(port, '0,0,0,0', () => {
    logger.success(`启动成功http://localhost:${port}`)
})