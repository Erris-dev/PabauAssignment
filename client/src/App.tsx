import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homepage";
import IntrumentSpecifics from "./pages/InstrumentSpecifics";
import Collections from "./pages/Collections";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collections/:brandId" element={<Collections />} />
      <Route path="/collections/:brandId/:modelId" element={<IntrumentSpecifics />} />
    </Routes>
  )
}

export default App;