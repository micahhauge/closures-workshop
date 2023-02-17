type Priority = 'info' | 'error';

function createLogger(applicationId: string) {

}

const myAppLogger = createLogger('application-id');

myAppLogger.logInfo('The user logged in');    // => console.log({ applicationId: 'application-id', priority: 'info',  message: 'The user logged in'  });
myAppLogger.logError('Something went wrong'); // => console.log({ applicationId: 'application-id', priority: 'error', message: 'Something went wrong' });
