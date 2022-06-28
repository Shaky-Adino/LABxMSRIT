import { Routes, Route} from "react-router-dom";
import DSLab from "./pages/DSLab";
import DSQuestion from "./pages/DSQuestion";
import Stack from "./pages/DataStructures/Stack/Stack";
import SparseMatrix from "./pages/DataStructures/SparseMatrix/SparseMatrix";
import Queue from "./pages/DataStructures/Queue/Queue";
import Array from "./pages/DataStructures/Array/Array";
import LinkedList from "./pages/DataStructures/LinkedList/LinkedList";
import Graph from "./pages/DataStructures/Graph/Graph";
import Tree from "./pages/DataStructures/Tree/Tree";

function App() {

  return (
   <>
      <Routes>
        <Route path='/' element={<DSLab />} />
        <Route exact path='/dslab/question/:id' element={<DSQuestion />} />
        <Route path="/datastructure/Stack" element={<Stack />} />
        <Route path="/datastructure/Queue" element={<Queue />} />
        <Route path="/datastructure/SparseMatrix" element={<SparseMatrix />} />
        <Route path="/datastructure/Array" element={<Array />} />
        <Route path="/datastructure/LinkedList" element={<LinkedList />} />
        <Route path="/datastructure/Graph" element={<Graph />} />
        <Route path="/datastructure/Tree" element={<Tree />} />
      </Routes>
   </>
  );
}

export default App;