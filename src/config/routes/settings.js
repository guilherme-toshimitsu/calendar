export default {
  authorizationAction: () => {},

  authenticationAction: (route, props) => {
    // window.location.href = sso.loginUrl()

    /**
     * The user is allowed to navigate even when not authenticated
     */
    props.history.push('/');
    return null;
  },

  hasAuthorization: () => true,

  hasAuthentication: () => true,
};
