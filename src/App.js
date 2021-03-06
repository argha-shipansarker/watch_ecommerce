import './App.css';

import { Container } from '@material-ui/core';

import Header from './layout/Header';
import theme from './helpers/theme/theme';
import HeroSection from './components/HeroSection';
import HeroSectionProducts from './components/HeroSectionProducts';
import ProductRecommendation from './components/ProductRecommendation';
import HotItemBanner from './components/HotItemBanner';
import HotItemProducts from './components/HotItemProducts';
import Category from './components/Category';
import MostSold from './components/MostSold';
import BlogSection from './components/BlogSection';
import FooterBanner from './components/FooterBanner';
import Footer from './layout/Footer';
import FooterFinish from './layout/FooterFinish';

import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <HeroSection />
        <HeroSectionProducts />
        <ProductRecommendation />
        <HotItemBanner />
        <HotItemProducts />
        <Container>
          <hr style={{ position: "relative", top: -100, color: "rgb(213, 217, 223)" }} />
        </Container>
        <Category />
        <MostSold />
        <Container>
          <hr style={{ color: "rgb(213, 217, 223)", marginBottom: 159 }} />
        </Container>
        <BlogSection />
        <FooterBanner />
        <Footer />
        <FooterFinish />
      </div>
    </ThemeProvider>
  );
}

export default App;
