import { DcScreen } from "../components/dcs/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import {Routes, Route} from 'react-router-dom';
import { HeroScreen } from "../components/hero/HeroScreen";



export const DashboardRoutes = () => {
  return <>
    <Navbar/>
    <Routes>
          <Route path="dc" element={<DcScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path='hero' element={<HeroScreen/>}/>
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
  </>;
};
