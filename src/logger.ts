type Priority = 'info' | 'error';

function createLogger(appId: string) {
  // Private log function
  function log(message: string, priority: Priority) {
    console.log({ appId, message, priority });
  }

  function logInfo(message: string) {
    return log(message, 'info');
  }

  function logError(message: string) {
    return log(message, 'error');
  }

  return { logInfo, logError };
}

const myAppLogger = createLogger('rt-protections-pro-notification-lambda');

myAppLogger.logError('Something went wrong');
