import React from 'react'
import styled from 'styled-components'
import ChannelList from './ChannelList'
import MessageInput from './MessageInput'
import ChatContent from './ChatContent'


const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const ContentLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;

const Sidebar = styled.div`
  background-color: #333;
  color: white;
  width: 200px;
`;

const Content = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 20px 20px 0 20px;
  position: relative;
`;

const Footer = styled.div`
  flex: 0 0 auto;
  padding: 20px;
`;

export default () =>  
  <MainLayout>

    <Sidebar>
      <ChannelList />
    </Sidebar>

    <ContentLayout>
      <Content>
        <ChatContent />
      </Content>
      <Footer>
        <MessageInput />
      </Footer>
    </ContentLayout>

  </MainLayout>
