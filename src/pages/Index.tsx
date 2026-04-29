import { useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { Portfolio } from "@/components/Portfolio";

const Index = () => {
  const [booted, setBooted] = useState(false);
  return (
    <>
      {!booted && <BootSequence onDone={() => setBooted(true)} />}
      <Portfolio />
    </>
  );
};

export default Index;
