import React, { Component } from 'react'


import './index.scss'


class RightHeader extends Component {

    render() {



        return (
            <div className="right-header">

                <div className="right-header-top">
                    <span>欢迎，zxxxTest</span>
                    <span>退出</span>
                </div>

                <div className="right-header-bottom">
                    <div className="right-header-bottom-left">首页</div>
                    <div className="right-header-bottom-right">
                        <span>2019-10-30 19:38:52</span>
                        <span>晴</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default RightHeader;
