function App() {
    return (
      <div>
        <Person
          name="Josh"
          age={29}
          hobbies={["cooking", "watching tv", "drinking beer"]}
        />
        <Person name="Deja" 
        age={27} 
        hobbies={["dancing", "singing", "watching tv"]} />
        <Person
          name="Dandy"
          age={3}
          hobbies={["play fighting", "eating"]}
        />
        <Person
          name="Ginger"
          age={13}
          hobbies={["sleeping", "self grooming", "eating"]}
        />
      </div>
    );
  }