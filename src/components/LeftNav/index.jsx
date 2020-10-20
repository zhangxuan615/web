import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom'
import { Menu, } from 'antd';

import { menuList, menuIcon } from '../../config/menuConfig';
import menLogo from '../../assets/img/menLogo.jpg';

import './index.scss';

const { SubMenu } = Menu;


class LeftNav extends Component {

    constructor(props) {
        super(props);

        this.openKey = [];
        this.MenuNodes = this.getMenuNodes_map(menuList, '');
    }

    getMenuNodes_map = (menuList, pKey) => {

        return menuList.map(item => {

            const menuKey = pKey + item.key;
            if (!item.children) {
                return (
                    <Menu.Item key={menuKey} icon={menuIcon[item.icon]}>
                        <Link to={menuKey}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            } else {

                // 得到当前请求的路由路径
                const { pathname } = this.props.location;
                if (pathname.startsWith(menuKey)) {
                    this.openKey.push(menuKey);
                }

                return (
                    <SubMenu
                        key={menuKey}
                        icon={menuIcon[item.icon]}
                        title={<span>{item.title}</span>}
                    >
                        {this.getMenuNodes_map(item.children, menuKey)}
                    </SubMenu>
                );
            }
        });
    }

    render() {

        // 得到当前请求的路由路径
        const { pathname } = this.props.location;

        return (
            <div className="left-nav">
                
                <Link to={'/home'} className="left-nav-header">
                    <img src={menLogo} alt="logo"></img>
                    <h1>zx后台</h1>
                </Link>

                <Menu
                    selectedKeys={[pathname]}
                    defaultOpenKeys={this.openKey}
                    mode="inline"
                    theme="dark"
                >
                    {this.MenuNodes}
                </Menu>

            </div>
        );
    }
}

export default withRouter(LeftNav);
