import { push } from 'connected-react-router';

export const routerHome = () => dispatch => dispatch(push('/'));
export const routerSignIn = () => dispatch => dispatch(push('/signin'));
export const routerSignUp = () => dispatch => dispatch(push('/signup'));
export const routerSignOut = () => dispatch => dispatch(push('/signout'));
export const routerNewRecipe = () => dispatch => dispatch(push('/recipe'));
