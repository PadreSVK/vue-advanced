
export const LogLevel = {
    Informational: "Informational",
    Warning: "Warning",
    Error: "Error",
}

class Logger {
    constructor(logLevel) {
        this.level = logLevel
    }

    logInfo(message) {
        if (this.level == LogLevel.Informational) {
            console.log(message)
        }
    }

    logError(message) {
        if (this.level == LogLevel.Warning || this.level == LogLevel.Informational || this.level == LogLevel.Error) {
            console.error(message)
        }
    }

    logWarn(message) {
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
            logWarn: (_) => { },
            logError: (_) => { },
            logInfo: (_) => { },
        }
    }
}
const logger = getLogger();



export default logger;