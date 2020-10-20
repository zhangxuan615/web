import React, { Component } from 'react'
import { Switch, Route, Redirect, } from 'react-router-dom'

import Category from './Category';
import Home from './Home';
import Product from './Product';
import Comment from './Comment';
import Comment2 from './Comment2';
import User from './User';

import './index.scss'


class RightContent extends Component {

    render() {

        return (
            <div className="right-content">
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/appstore/category' component={Category} />
                    <Route path='/appstore/product' component={Product} />
                    <Route path='/appstore/appstore2/comment' component={Comment2} />
                    <Route path='/comment' component={Comment} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default RightContent;
