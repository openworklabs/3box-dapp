import {
  store,
} from './store';

const threeBoxReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHECK_WALLET':
      return {
        ...state,
        hasWallet: action.hasWallet,
        currentWallet: action.currentWallet,
        isSignedIntoWallet: action.isSignedIntoWallet,
      };

    case 'DIFFERENT_NETWORK':
      return {
        ...state,
        currentNetwork: action.currentNetwork,
        prevNetwork: action.prevNetwork,
        showDifferentNetworkModal: true,
        ifFetchingThreeBox: false,
      };

    case 'CHECK_NETWORK_AND_ADDRESS':
      return {
        ...state,
        currentNetwork: action.currentNetwork,
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
        showErrorModal: false,
        errorMessage: '',
        name: action.name,
        github: action.github,
        image: action.image,
        email: action.email,
        feedByAddress: action.feedByAddress,
        switched: action.switched,
      };

    case 'GET_THREEBOX':
      return {
        ...state,
        box: action.box,
        ifFetchingThreeBox: false,
        switched: action.switched,
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
        showErrorModal: true,
        provideConsent: false,
        errorMessage: action.errorMessage,
      };

    case 'CLOSE_ERROR_MODAL':
      return {
        ...state,
        errorMessage: '',
        showErrorModal: false,
      };

    case 'OPEN_ERROR_MODAL':
      return {
        ...state,
        errorMessage: '',
        showErrorModal: true,
      };

    case 'CLOSE_CONSENT_MODAL':
      return {
        ...state,
        provideConsent: false,
      };

    case 'CLOSE_DIFFERENT_NETWORK_MODAL':
      return {
        ...state,
        showDifferentNetworkModal: false,
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

    case 'SHOW_LOGGEDOUT_MODAL':
      return {
        ...state,
        loggedOutModal: action.loggedOutModal,
        ifFetchingThreeBox: false,
      };

    case 'SHOW_SWITCHED_ADDRESS_MODAL':
      return {
        ...state,
        switchedAddressModal: action.switchedAddressModal,
        ifFetchingThreeBox: false,
        switched: action.switched,
      };

    case 'HANDLE_SIGNIN_MODAL':
      return {
        ...state,
        signInModal: action.signInModal,
      };

    case 'PROCEED_WITH_SWITCHED_ADDRESS':
      return {
        ...state,
        switch: action.switch,
        showDifferentNetworkModal: action.showDifferentNetworkModal,
      };

    case 'HANDLE_SIGNIN_MODAL':
      return {
        ...state,
        showYouMustBeSignedInModal: action.showYouMustBeSignedInModal,
      };

    default:
      return state;
  }
};

export {
  threeBoxReducer,
};