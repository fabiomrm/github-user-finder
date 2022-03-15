import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import {GithubSearch} from 'pages/GithubSearch';

const MainRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/githubsearch" element={<GithubSearch />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;
