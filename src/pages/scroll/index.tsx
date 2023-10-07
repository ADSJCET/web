import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Example } from "@/components/ui/Example";
import { Refresh } from "@/components/ui/Refresh";



const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container invert">
        <Example key={count} />
      </div>
    </>
  );
};

export default App
