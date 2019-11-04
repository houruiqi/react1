import React, { Component } from 'react'

export default class Panel extends Component {
    render() {
        return (
            <div>
                <div class="panel">
                    <div class="inner">
                        <p>CNode：Node.js专业中文社区</p>
                        <div>
                            您可以
                            <a href="/signin">登录</a>
                            或
                            <a href="/signup">注册</a>
                            , 也可以
                            <a href="/auth/github">
                                <div id="info">通过 GitHub 登录</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="panel1">
                    <div class="ads">
                        <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target="_blank" class="banner sponsor_outlink" data-label="qiniu-sidebar">
                            <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" />
                        </a>
                        <div class="sep10"></div>
                        <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" class="banner sponsor_outlink" data-label="alinode">
                            <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" />
                        </a>
                        <div class="sep10"></div>
                        <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc_540_130&amp;utm_campaign=huodong&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
                            <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
