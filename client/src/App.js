import { Route, Routes } from "react-router-dom";
import { Post } from "./components/Post";
import { PostList } from "./components/PostList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostList />}/>
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
