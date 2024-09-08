import { Button } from "flowbite-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button className="bg-red-500">btn</Button>
    </>
  );
}

export default App;
