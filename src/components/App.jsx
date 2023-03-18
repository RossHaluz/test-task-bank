import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";


const Home = lazy(() => import('../pages/Home'));
const CurrentRates = lazy(() => import('../pages/CurrentRates'))

export const App = () => {
  return <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="current" element={<CurrentRates/>}/>
    </Route>
    </Routes>
};
