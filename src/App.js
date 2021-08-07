import SubReddits from './Components/subReddits/subReddits';
import MainPane from './Components/mainPane/mainPane';
import Filter from './Components/filter/filter';
import SearchBar from './Components/SearchBar/searchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Filter />
      <SubReddits />
      <MainPane />


    </div>
  );
}

export default App;
