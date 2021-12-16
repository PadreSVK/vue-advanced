/* eslint-disable no-unused-vars */

export enum LogLevel {
    Informational = "Informational",
    Warning = "Warning",
    Error = "Error",
}

class Logger {
    level = LogLevel.Error
    constructor(logLevel: LogLevel) {
        this.level = logLevel
    }

    logInfo(message: String) {
        if (this.level == LogLevel.Informational) {
            console.log(message)
        }
    }

    logError(message: String) {
        if (this.level == LogLevel.Warning || this.level == LogLevel.Informational || this.level == LogLevel.Error) {
            console.error(message)
        }
    }

    logWarn(message: String) {
        if (this.level == LogLevel.Warning || this.level == LogLevel.Informational) {
            console.warn(message)
        }
    }
}

function getLogger() {
    if (process.env.NODE_ENV === 'development') {
        //todo load from configuration
        return new Logger(LogLevel.Informational)
    }
    else {
        return {
            logWarn: (_: String) => { },
            logError: (_: String) => { },
            logInfo: (_: String) => { },
        }
    }
}
const logger = getLogger();



export default logger;