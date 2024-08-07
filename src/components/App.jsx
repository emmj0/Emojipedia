// eslint-disable-next-line
import React from "react";
import Card from "./card";
import Emojipedia from "../emojipedia";

function createCard(emojiterm) {
  return (
    <Card
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      title={emojiterm.name}
      description={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>Emojipedia</h1>
      {Emojipedia.map(createCard)}
    </div>
  );
}

export default App;
