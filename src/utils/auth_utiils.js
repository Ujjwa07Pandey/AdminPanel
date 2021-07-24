export const getAuthErrorMessage = (code) => {
  switch (code) {
    case 'auth/app-deleted':
      return 'Operation Unavailable. Please contact your Administrator.';

    case 'auth/app-not-authorized':
      return 'Unauthorised. Please contact your Administrator.';
    case 'auth/invalid-api-key':
      return 'Unauthorised. Please contact your Administrator.';
    case 'auth/invalid-tenant-id':
      return 'Unauthorised. Please contact your Administrator.';
    case 'auth/operation-not-allowed':
      return 'Unauthorised. Please contact your Administrator.';

    case 'auth/argument-error':
      return 'Invalid Credentials. Please try again.';
    case 'auth/unauthorized-domain':
      return 'Invalid Credentials. Please try again.';

    case 'auth/invalid-user-token':
      return 'User requires recent login. Please login again.';
    case 'auth/requires-recent-login':
      return 'User requires recent login. Please login again.';

    case 'auth/network-request-failed':
      return 'Request has timed out. Please try again.';

    case 'auth/too-many-requests':
      return 'Unusual activity detected. Please try again later.';

    case 'auth/wrong-password':
      return 'Username or password invalid. Please try again.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters. Please try again.';
    case 'auth/invalid-email':
      return 'Invalid email address. Please try again.';

    case 'auth/web-storage-unsupported':
      return 'Browser does not support web storage. Please enable it and try again.';

    case 'auth/user-not-found':
      return 'User not found. Please register in the signup page.';
    case 'auth/email-already-in-use':
      return 'Email address is already in use by another account. Please proceed to login.';
    case 'auth/user-disabled':
      return 'User has been disabled. Please contact your Administrator.';

    default:
      return null;
  }
};
