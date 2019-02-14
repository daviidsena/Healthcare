import React from 'react'
import Item from './NavItem'
import './Nav.css'

class Nav extends React.Component{
    render(){
            return(
                <div>

                    <div className="menu-container">
                    <div className="menu">
                        <aside className="logo"> Healthcare </aside>
                        
                        <aside className="menu-area">
                            {/* <Item link="/" icon="login" title="Login" /> */}
                            <Item link="/home" icon="home" title="Home" />
                            <Item link="/users" icon="users" title="Users" />
                            <Item link="/employee" icon="fas fa-id-card" title="Employee" />
                            <Item link="/medical" icon="fas fa-user-md" title="Medical" />
                        </aside>
                    </div>    
                    </div>
                </div>
            )
            }
}

export default Nav;