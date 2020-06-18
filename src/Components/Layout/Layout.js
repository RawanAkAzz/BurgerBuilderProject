import React from 'react';
import Aux from  '../../hoc/Aux'
import classes from '../Layout/Layout.css'
const Layout = (props)=>(
   <Aux>
   <div>
     Toolbar and Drow and sdjwsd
   </div>
   <main className={classes.Content}>{props.children}</main>
</Aux>
)

export default Layout;