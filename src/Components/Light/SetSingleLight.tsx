import { memo } from "react";
import lightsStore from "Helpers/lightsStore";

const SetSingleLight = memo(function SetSingleLight({ test }: any) {
  console.log("TEST");
  const setTestArray = lightsStore((state) => state.setTestArray);

  return (
    <div>
      <button onClick={() => setTestArray(0, 0, 0, "LOL")}>TEST</button>

      <span>{JSON.stringify(test)}</span>
    </div>
  );
});

export default SetSingleLight;
