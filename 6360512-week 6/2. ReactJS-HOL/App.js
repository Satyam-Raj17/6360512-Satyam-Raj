import React from "react";


const Home = () => (
  <div style={{ padding: "5px", margin: "5px", backgroundColor: "white", borderRadius: "10px" }}>
   
    <p>Welcome to the Home page of Student Management Portal</p>
  </div>
);


const About = () => (
  <div style={{ padding: "5px", margin: "5px", backgroundColor: "white", borderRadius: "10px" }}>
  
    <p>Welcome to the About page of the Student Management Portal</p>
  </div>
);

const Contact = () => (
  <div style={{ padding: "5px", margin: "5px", backgroundColor: "white", borderRadius: "10px" }}>
    <p>Welcome to the Contact page of the Student Management Portal</p>
  </div>
);

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: "white", minHeight: "100vh" }}>
      <header style={{ padding: "20px" }}>
        <h1>Student Management Portal</h1>
      </header>
      <main>
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}
