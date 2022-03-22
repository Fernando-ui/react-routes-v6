import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return <>
    <Navbar/>
    <Routes>
          <Route path="dc" element={<DcScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="search" element={<searchscreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
  </>;
};
