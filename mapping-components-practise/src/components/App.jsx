import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
// 1. create entry component +
// 2. create props to replace hardcoded data
// 3. map through emojopedia arrays and render Entry components

console.log(emojipedia);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry
          emoji="💪"
          name="Tense Biceps"
          description="You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Entry />
        <Entry />
      </dl>
    </div>
  );
}

export default App;
