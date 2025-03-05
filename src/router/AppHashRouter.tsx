import { HashRouter, Routes, Route } from 'react-router-dom';
import { BlogScreen } from '../blog';
import { Footer } from '../components';
import { HomeScreen } from '../screens/HomeScreen';
import { PdfScreen } from '../screens/PdfScreen';
import { AppIntlProvider } from '../i18n/AppIntlProvider';

export const AppHashRouter = () => {
  return (
    <AppIntlProvider>
      <HashRouter>
        <Routes>
          <Route path='' element={<HomeScreen />} />
          <Route path='blog' element={<BlogScreen />} />
          <Route path='pdf' element={<PdfScreen />} />
        </Routes>
        <Footer />
      </HashRouter>
    </AppIntlProvider>
  );
};
