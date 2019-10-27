import {userActionTyps} from './userTyps';

const INITIAL_STATE={
    isOpenSidebarMenu :false,//open and close HumbergerMenu
    currentUser:null
}
const userReducer=(state=INITIAL_STATE,action)=>{
  const {isOpenSidebarMenu}=state;
   switch(action.type){
     case userActionTyps.SET_CURRENT_USER:
     return {
       ...state,
       currentUser:action.payload
     }
     case userActionTyps.OPEN_CLOSE_SIDEMENUE :
     return {
      ...state,
      isOpenSidebarMenu:!isOpenSidebarMenu
    }
     default:
     return state;
   }
}

export default userReducer;