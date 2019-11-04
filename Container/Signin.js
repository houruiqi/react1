import React, { Component } from 'react'

export default class Signin extends Component {
    render() {
        return (
            <div class="inn">
                <form id="signin">
                    <div class="group">
                        <div class="label">用户名</div>
                        <input class="xlarge" name="name" size="30" type="text"/>
                    </div>
                    <div class="group">
                        <div class="label">密码</div>
                            <input class="xlarge" name="pass" size="30" type="password"/>
                    </div>
                    {/* <input type="hidden" name="_csrf" value="vq7xD4JX-YKtqZPH3Rc8tla2TZw2rRNtA0F8"/> */}
                    <div class="form-actions">
                        <a href="/react1">
                            <span class="info">通过 GitHub 登录</span>
                        </a>
                        <a id="forgot" href="/search_pass">忘记密码了?</a>
                    </div>
                </form>
            </div>
        )
    }
}
