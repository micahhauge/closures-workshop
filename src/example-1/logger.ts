type Priority = 'info' | 'error';

function createLogger(applicationId: string) {
  function log(message: string, priority: Priority) {
    console.log({ applicationId, message, priority });
  }

  function logInfo(message: string) {
    return log(message, 'info');
  }

  function logError(message: string) {
    return log(message, 'error');
  }

  return { logInfo, logError };
}

const myAppLogger = createLogger('application-id');

myAppLogger.logInfo('The user logged in');
myAppLogger.logError('Something went wrong');
