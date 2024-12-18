const winston = require('winston')
const path = require('path')
const moment = require('moment-timezone')

const currDir = __dirname

const srcDir = path.resolve(currDir, "..")

const loggingDir = path.resolve(srcDir, "logging")

const customFormat = winston.format.printf(({level, message, timestamp}) => {
    return `${timestamp} [${level}]: ${message}`
})

const timeZone= "Asia/Kolkata"

const logger = winston.createLogger({
    format: winston.format.combine(
    winston.format.timestamp({ format: ()=> moment().tz(timeZone).format()}), 
    customFormat),

    transports: [
        new winston.transports.Console({ level : "debug"}),
        new winston.transports.File({
            filename: path.join(loggingDir, "test_run.log"),
            maxFiles: 5,
            maxsize: 10 * 1024,
            level: "info",
        }),
        new winston.transports.File({
            filename: path.join(loggingDir, "test_run.log"),
            maxFiles: 5,
            maxsize: 10*1024,
            level: "error",
        }),
    ],
});

exports.logger = logger