import { push } from 'connected-react-router';

export const routerHome = () => dispatch => dispatch(push('/'));
export const routerSignIn = () => dispatch => dispatch(push('/login'));
export const routerSignOut = () => dispatch => dispatch(push('/signout'));
export const routerRegister = () => dispatch => dispatch(push('/register'));
export const routerNewRecipe = () => dispatch => dispatch(push('/recipe'));
