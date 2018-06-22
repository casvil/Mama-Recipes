import { push } from 'connected-react-router';

export const routerHome = () => dispatch => dispatch(push('/'));
export const routerLogin = () => dispatch => dispatch(push('/login'));
export const routerRegister = () => dispatch => dispatch(push('/register'));
export const routerNewRecipe = () => dispatch => dispatch(push('/recipe'));
