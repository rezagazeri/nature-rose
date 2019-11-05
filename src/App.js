import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser,isOpenSidebarMenu} from './Redux';
import {createStructuredSelector} from 'reselect';
import {selectisOpenSidebarMenu} from './Redux/user/Userselector';
import './scss/utils/app.scss';
import Header from './components/Header/Header'
import TitelHeader from './components/TitelHeader/TitelHeader';
import ToolBar from './components/Toolbar/ToolBar';
import SideToolbar from './components/SideToolbar/SideToolbar';
import BackDrow from './components/BackDrow/BackDrow';
import Hompage from './Pages/Hompage';
import Shop from './Pages/Shop';
import LoginLogoutPage from './Pages/Login-Logout';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import Checkout from './Pages/Checkout';

 class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  unsubscribeFromAuth = null;

  //open and close HumbergerMenu=========================================
  handleClick(){
    const {isOpenSidebarMenu} = this.props;
   // const HumbegerSitiation = this.state.isOpenSidebarMenu;
   isOpenSidebarMenu();
  }
  //========================================
 componentDidMount(){
const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
         });
      });
    }else
    {
      setCurrentUser(userAuth);
    }

  });
 }

 componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  //===================================================================
  render() {
    let menustate;

    if (this.props.OpenCloseSideMenu){
       menustate = (
        <div>
           <BackDrow handlebackdrowClick={this.handleClick} />
         </div> 
        );
    }
    return (
      <div>
        <TitelHeader />
        <Header />
        <ToolBar sideMenuClick={this.handleClick} />
        <SideToolbar />
        {menustate}
        <Switch >
          <Route exact path ='/' render={(routeProps)=><Hompage {...routeProps} />} />
          <Route exact path ='/shop' render={(routeProps)=><Shop {...routeProps} />} />
          <Route exact path ='/signin' component={LoginLogoutPage } />
          <Route exact path ='/checkout' component={Checkout} />
        </Switch>
        
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  OpenCloseSideMenu : selectisOpenSidebarMenu
});
const mapDispatchToProps = dispatch=>({
  setCurrentUser : user=>(dispatch(setCurrentUser(user))),
  isOpenSidebarMenu :()=>(dispatch(isOpenSidebarMenu()))
});
export default connect(mapStateToProps,mapDispatchToProps)(App); 

