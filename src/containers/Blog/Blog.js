import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import http from 'http';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    componentDidMount() {
        const liveUrl ='http://cbsaweb-sit.northeurope.cloudapp.azure.com:8080/author/.rest/nodes/v1/website/internet-banking/dashboard/banner-section?depth=3';
        const testURL = 'http://localhost:8080/magnoliaPublic/.rest/nodes/v1/website/travel/about?depth=3';
        // axios.get(liveUrl,)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));

        axios.get(liveUrl, {
            // proxy: {
            //     host: 'http://cbsaweb-sit.northeurope.cloudapp.azure.com',
            //     port: 8080
            // },
            // auth : {
            //     username: 'superuser',
            //     password: 'superuser'
            // }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;