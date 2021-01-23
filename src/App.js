import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';

//components
import Loader from './components/utils/Loader'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

//styles
import GlobalStyles from './global-styles'
import styled from 'styled-components'
const AppStyled = styled.div`
  
`

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

//pages
const IndexPage = lazy(() => import('./pages/IndexPage'));

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sideBarData = {
    isSideBarOpen,
    setIsSideBarOpen: () => setIsSideBarOpen(prevState => !prevState)
  }

  return (
    <AppStyled className="App">
      <GlobalStyles />
      <Router>
        <Suspense fallback={<LoaderWrapper><Loader /></LoaderWrapper>}>
          <Header sideBarData={sideBarData} />
          <SideBar sideBarData={sideBarData} />
          <IndexPage />
        </Suspense>
      </Router>
    </AppStyled>
  );
}

export default App;
