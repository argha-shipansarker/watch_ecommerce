import './App.css';

import Header from './layout/Header';
import theme from './helpers/theme/theme';
import HeroSection from './components/HeroSection';
import HeroSectionProducts from './components/HeroSectionProducts';

import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <HeroSection />
        <HeroSectionProducts />
      </div>
    </ThemeProvider>
  );
}

export default App;
