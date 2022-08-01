function createLogger(appId: string) {
  function logInfo(logObject: object) {
    console.log({ appId, priority: 'info', ...logObject });
  }

  function logError(logObject: object) {
    console.log({ appId, priority: 'info', ...logObject });
  }

  return { logInfo, logError };
}

const myAppLogger = createLogger('rt-protections-pro-notification-lambda');

myAppLogger.logError({ message: 'something went wrong!' });
