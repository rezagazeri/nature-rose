import React,{Component} from 'react';
import './scss/utils/app.scss';
import Header from './components/Header/Header'
import TitelHeader from './components/TitelHeader/TitelHeader';
import ToolBar from './components/Toolbar/ToolBar';
import SideToolbar from './components/SideToolbar/SideToolbar';
import BackDrow from './components/BackDrow/BackDrow';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
       isOpenSidebarMenu :false//open and close HumbergerMenu
    }
    this.handleClick = this.handleClick.bind(this);
  }
  //open and close HumbergerMenu=========================================
  handleClick(){
    const HumbegerSitiation = this.state.isOpenSidebarMenu;
    this.setState({isOpenSidebarMenu : !HumbegerSitiation})
  }
  //================show and hide sidebar menu========================
 
  //===================================================================
  render() {
    let menustate;
    if (this.state.isOpenSidebarMenu ){
       menustate = (
        <div>
           <SideToolbar />
           <BackDrow handlebackdrowClick={this.handleClick} />
         </div> 
        );
    }
    return (
      <div>
        <TitelHeader />
        <Header />
        <ToolBar sideMenuClick={this.handleClick} />
        {menustate}
  
        <h1>سلام</h1>
      </div>
    )
  }
}

