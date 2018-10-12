const threeBoxReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHECK_WALLET':
      return {
        ...state,
        hasWallet: action.hasWallet,
        currentWallet: action.currentWallet,
      };

    case 'REQUIRE_METAMASK':
      return {
        ...state,
        alertRequireMetaMask: action.alertRequireMetaMask,
      };

    case 'SIGN_IN_UP':
      return {
        ...state,
        box: action.box,
        ifFetchingThreeBox: false,
        signUpSuccessful: true,
        showErrorModal: false,
        errorMessage: '',
        name: action.name,
        github: action.github,
        image: action.image,
        email: action.email,
        feedByAddress: action.feedByAddress,
      };

    case 'GET_THREEBOX':
      return {
        ...state,
        box: action.box,
        ifFetchingThreeBox: false,
      };

    case 'GET_PUBLIC_NAME':
      return {
        ...state,
        name: action.name,
      };

    case 'GET_PUBLIC_GITHUB':
      return {
        ...state,
        github: action.github,
      };

    case 'GET_PUBLIC_IMAGE':
      return {
        ...state,
        image: action.image,
      };

    case 'GET_PRIVATE_EMAIL':
      return {
        ...state,
        email: action.email,
      };

    case 'PROVIDE_CONSENT':
      return {
        ...state,
        provideConsent: true,
      };

    case 'LOADING_3BOX':
      return {
        ...state,
        provideConsent: false,
        ifFetchingThreeBox: true,
      };

    case 'FAILED_LOADING_3BOX':
      return {
        ...state,
        ifFetchingThreeBox: false,
        signUpSuccessful: false,
        showErrorModal: true,
        errorMessage: action.errorMessage,
      };

    case 'CLOSE_ERROR_MODAL':
      return {
        ...state,
        errorMessage: '',
        showErrorModal: false,
      };

    case 'CLOSE_CONSENT_MODAL':
      return {
        ...state,
        provideConsent: false,
      };

    case 'LOADING_ACTIVITY':
      return {
        ...state,
        ifFetchingActivity: true,
      };

    case 'GET_ACTIVITY':
      return {
        ...state,
        feedByAddress: action.feedByAddress,
        ifFetchingActivity: false,
      };

    case 'FAILED_LOADING_ACTIVITY':
      return {
        ...state,
        feedByAddress: [],
        ifFetchingActivity: false,
      };

    default:
      return state;
  }
};

export {
  threeBoxReducer,
};