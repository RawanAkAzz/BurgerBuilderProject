import React from 'react';
import Aux from  '../../hoc/Auxi'
import classes from '../Layout/Layout.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
const Layout = (props)=>(
   <Aux>
   <div>
     <Toolbar/>
   </div>
   <main className={classes.Content}>{props.children}</main>
</Aux>
)

export default Layout;