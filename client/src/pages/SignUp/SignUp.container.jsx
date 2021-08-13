import { connect } from 'react-redux';

import { signupStart } from 'src/store/auth/auth.actions';

const mapDispatchToProps = (dispatch) => ({
  onUserRegister: (name, email, password) =>
    dispatch(signupStart(name, email, password))
});

const container = connect(null, mapDispatchToProps);

export default container;
