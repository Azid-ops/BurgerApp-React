import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component{
    state = {
        showSideDrawer:false
    }
    SideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false })
    }

    showDrawer = () =>{
        this.setState({showSideDrawer:true})
    }
    render()
    {
        return(
            <Aux>
                <div>
                    <Toolbar menu={this.showDrawer}/>
                </div>
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout;