function App() {
    return (
      <div>
        <Tweet
          name="Trent Lane"
          username="TLizzane"
          date={new Date().toDateString()}
          message="Pretty sure I saw a UFO last night..."
        />
        <Tweet
          name="Jane Lane"
          username="PlainJane"
          date={new Date().toDateString()}
          message="Trent's been smoking again."
        />
        <Tweet
          name="Daria Morgendorffer"
          username="Daria01"
          date={new Date().toDateString()}
          message="I don't have low self esteem."
        />
      </div>
    );
  }