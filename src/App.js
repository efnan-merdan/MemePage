import React, {useState, useEffect} from 'react'; 
import './App.css';
import SearchIcon from './search.svg';
import MemeList from './MemeList.json';
import MemeCard from './MemeCard';

console.log(MemeList);

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        searchMemes("Chickens");
      }, []);

      const searchMemes = async (title) => {
        const response = await fetch("MemeList.json");
        const data = await response.json();
    
        setMemes(data.Search);
      };

    console.log(memes.length);  

    return (
        <div className="app">
            <h1>MemeLand</h1>
 
            <div className="search">
                <input 
                    placeholder="Search for movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMemes(searchTerm)}
                />
            </div>

            {memes?.length > 0 ? (
                
                <div className="container">
                    {memes.map((meme) => (
                        <MemeCard meme={meme}/>
                    ))}   
                </div>
            ) : (
                
                <div className='empty'>
                    <h2>No memes found</h2>
                </div>
            )}
    
        </div>
    );
    
}

export default App;