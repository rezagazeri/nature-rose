import {userActionTyps} from './userTyps';

 export  const setCurrentUser =user =>({
    type : userActionTyps.SET_CURRENT_USER,
    payload : user
});
export const isOpenSidebarMenu = ()=>({
    type : userActionTyps.OPEN_CLOSE_SIDEMENUE
});
