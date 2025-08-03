import { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('book');
  let content;
  if (view === 'book') {
    content = <BookDetails />;
  } else if (view === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>Blogger App</h1>

      {/* Navigation buttons */}
      <button onClick={() => setView('book')}>Book</button>
      <button onClick={() => setView('blog')}>Blog</button>
      <button onClick={() => setView('course')}>Course</button>

      {/* Render based on condition */}
      {content}

      {/* Ternary Rendering */}
      <p>
        {view === 'book'
          ? 'Currently viewing Book Details'
          : view === 'blog'
          ? 'Currently viewing Blog Details'
          : 'Currently viewing Course Details'}
      </p>

      {/* Logical && */}
      {view === 'blog' && <p>Blog component is being displayed using logical AND (&&)</p>}
    </div>
  );
}

export default App;
