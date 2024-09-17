import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { useEffect } from 'react';
import Loader from './components/Loader';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Admin from './pages/admin';
import Login from './pages/admin/Login';

function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading(true))
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      console.log(response.data);
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false))
      dispatch(HideLoading())
    } catch (error) {
      dispatch(HideLoading())
      console.error("Error fetching portfolio data:", error);
    }
  };

  // Correctly using useEffect inside the App component
  useEffect(() => {
    if(!portfolioData) {
      getPortfolioData()
    }
  }, [ portfolioData]); // Empty dependency array to run once on mount

  useEffect(()=>{
    if(reloadData){
      getPortfolioData()
    }
  },[reloadData])
  // useEffect(() => {
  //   console.log(portfolioData);
    
  // }, [portfolioData])

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
