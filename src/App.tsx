import { useState } from "react";
import Notes from "./pages/Notes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Notes />
      <h1 className="text-3xl p-8">Hello!</h1>
    </>
  );
}

export default App;
