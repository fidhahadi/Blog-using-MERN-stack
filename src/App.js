import './App.css';
import About from './Pages/About';
import Article from './Pages/Article';
import ArticleList from './Pages/ArticleList';
import Home from './Pages/Home';
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/article-list' element={<ArticleList />}/>
        <Route path='/article/:name' element={<Article />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
