/**
 * home -- HomeOutlined
 * products -- ShoppingCartOutlined
 * category --  AppstoreAddOutlined
 * product --  ShoppingOutlined
 * commet -- CommentOutlined
 */
import React, { Component } from 'react';
import {
    HomeOutlined,
    ShoppingCartOutlined,
    AppstoreAddOutlined,
    ShoppingOutlined,
    CommentOutlined,
} from '@ant-design/icons';

export const menuIcon = {
    home: <HomeOutlined />,
    appstore: <ShoppingCartOutlined />,
    category: <AppstoreAddOutlined />,
    product: <ShoppingOutlined />,
    commet: <CommentOutlined />,
};

export const menuList = [
    {
        title: '首页', // 菜单标题名称
        key: '/home', // 对应的path
        icon: 'home', // 图标名称
    }, {
        title: '商品',
        key: '/appstore',
        icon: 'appstore',
        children: [ // 子菜单列表
            {
                title: '品类管理',
                key: '/category',
                icon: 'category'
            },
            {
                title: '商品管理',
                key: '/product',
                icon: 'product'
            },
            {
                title: '商品2',
                key: '/appstore2',
                icon: 'appstore',
                children: [
                    {
                        title: '评论',    // 菜单标题名称
                        key: '/comment',     // 对应的path
                        icon: 'commet',     // 图标名称
                    },
                ],
            },
        ]
    }, {
        title: '评论',    // 菜单标题名称
        key: '/comment',     // 对应的path
        icon: 'commet',     // 图标名称
    },
];
