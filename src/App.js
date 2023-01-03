import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MemeProfile from './components/MemeProfile';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meme" element={<MemeProfile />} />
        <Route path="/meme/:id" element={<MemeProfile />} />
    </Routes>
  );
};

export default App;
