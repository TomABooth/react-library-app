import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={BookList} />
        <Route path="/book/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
