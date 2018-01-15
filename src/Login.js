import React, { Component } from 'react';
import signin from './signin.css';

class Login extends Component {
    render() {
        return (
            <div class="container">
                <form class="form-signin">
                    <h2 class="form-signin-heading">登录</h2>
                    <label for="inputEmail" class="sr-only">用户名</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                        <label for="inputPassword" class="sr-only">密码</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" value="remember-me"/> 记住我
                                </label>
                            </div>
                            <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
                </form>
            </div>
        );
    }
}

export default Login;