import React from 'react'
import { Container} from '@material-ui/core'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'
import { GoogleOAuthProvider } from '@react-oauth/google'
import PostDetails from './Components/PostDetails/PostDetails'

import Article from '../../client/src/Components/Articles/Article'

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    
    return (
        <GoogleOAuthProvider clientId="580992036626-c0b51jag3glq81t4qpl8e7ssjo0j9rgf.apps.googleusercontent.com">    
        <BrowserRouter>
           <Container maxWidth='xl'>
            <Navbar />
            <Switch>
                <Route path='/articles' exact component={Article} />

                <Route path='/' exact component={() => <Redirect to="/posts" /> }/>
                <Route path='/posts' exact component={Home} />
                <Route path='/posts/search' exact component={Home} />
                <Route path='/posts/:id' exact component={PostDetails} />
                <Route path='/auth' exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}/>
            </Switch>
           </Container>
        </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App