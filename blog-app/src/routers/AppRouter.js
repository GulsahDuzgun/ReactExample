import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogDetailsPage from '../components/BlogDetailsPage'
import BlogListPage from '../components/BlogListPage'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import NotFoundPage from '../components/NotFoundPage'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
const AppRouter = () => {

  return (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" component= { HomePage } exact/>
                <Route path="/blogs" component= { BlogListPage } exact/>
                <Route path="/blogs/:id" component= { BlogDetailsPage }/>
                <Route path="/edit/:id" component= { EditBlogPage }/>
                <Route path="/contact" component= { ContactPage }/>
                <Route path="/create" component={AddBlogPage} />
                <Route component= { NotFoundPage }/>
            </Switch>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter