import { connect } from 'react-redux';

import { loadUserStart, signinStart } from '../../store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onSignIn: (email, password) => dispatch(signinStart(email, password)),
  userload: () => dispatch(loadUserStart())
});
const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
