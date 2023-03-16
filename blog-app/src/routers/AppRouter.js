import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogDetailsPage from '../components/BlogDetailsPage'
import BlogListPage from '../components/BlogListPage'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {

  return (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" component= { HomePage } exact/>
                <Route path="/blogs" component= { BlogListPage } exact/>
                <Route path="/blogs/:id" component= { BlogDetailsPage }/>
                <Route path="/contact" component= { ContactPage }/>
                <Route component= { NotFoundPage }/>
            </Switch>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter