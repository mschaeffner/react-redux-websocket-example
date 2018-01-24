import React from 'react'
import styled from 'styled-components'
import LoginContainer from './LoginContainer'


const LoginLayout = styled.div`
  margin: 100px auto;
  width: 400px;
`;

export default () =>  
  <LoginLayout>
    <LoginContainer />
  </LoginLayout>
