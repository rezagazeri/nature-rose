import {createSelector} from 'reselect';

const selectUser =  state=>state.user;

export const selectcurrentUser = createSelector(
    [selectUser],
    user=>user.currentUser);
export const selectisOpenSidebarMenu = createSelector(
    [selectUser],
    user=>user.isOpenSidebarMenu);    