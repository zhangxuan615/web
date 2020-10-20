import React, { Component } from 'react';
import { Button, Layout } from 'antd';

import LeftNav from './components/LeftNav';
import RightHeader from './components/RightHeader';
import RightContent from './components/RightContent';
import RightFooter from './components/RightFooter';

import './App.scss';

const { Header, Footer, Sider, Content } = Layout;

export default class App extends Component {

  render() {

    return (
      <Layout style={{ height: '100%' }}>

        <Sider><LeftNav></LeftNav></Sider>

        <Layout>
          <Header style={{ height: 'auto', padding: '0' }}>
            <RightHeader></RightHeader>
          </Header>

          <Content style={{ margin: '10px', backgroundColor: '#fff', overflow: 'auto', }}>
            <RightContent></RightContent>
          </Content>

          <Footer style={{ padding: '0' }}>
            <RightFooter></RightFooter>
          </Footer>
        </Layout>

      </Layout>
    );
  }
}
