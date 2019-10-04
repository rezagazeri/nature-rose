import React, { Component } from 'react';
import bn from '../../Utils/bemnames';
const bem =bn.create('signin'); 


export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state={
            Email : '',
            Passwort : ''
        }
    }
    render() {
        return (
            <div className={bem.b('signin')}>
               <h1>email</h1>  
               <span>enter data</span>
               <form>
                   
               </form>
            </div>
        )
    }
}
