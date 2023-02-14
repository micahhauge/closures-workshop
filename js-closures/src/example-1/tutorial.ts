type Priority = 'info' | 'error';

function createLogger(applicationId: string) {

}

const myAppLogger = createLogger('application-id');

myAppLogger.logInfo('The user logged in');
myAppLogger.logError('Something went wrong');
