import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
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

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
       isOpenSidebarMenu :false,//open and close HumbergerMenu
       currentUser:null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  unsubscribeFromAuth = null;

  //open and close HumbergerMenu=========================================
  handleClick(){
    const HumbegerSitiation = this.state.isOpenSidebarMenu;
    this.setState({isOpenSidebarMenu : !HumbegerSitiation})
  }
  //========================================
 componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });
      });
    }else
    {
      this.setState({ currentUser: userAuth });
    }

  });
 }

 componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  //===================================================================
  render() {
    let menustate;
    if (this.state.isOpenSidebarMenu ){
       menustate = (
        <div>
           <BackDrow handlebackdrowClick={this.handleClick} />
         </div> 
        );
    }
    return (
      <div>
        <TitelHeader />
        <Header currentuser={this.state.currentUser} />
        <ToolBar sideMenuClick={this.handleClick} />
        <SideToolbar />
        {menustate}
        <Switch >
          <Route exact path ='/' render={(routeProps)=><Hompage {...routeProps} />} />
          <Route exact path ='/shop' render={(routeProps)=><Shop {...routeProps} />} />
          <Route exact path ='/signin' component={LoginLogoutPage } />
        </Switch>
        
      </div>
    )
  }
}

