import Hero from "./components/Hero";
import AppRoutes from "./config/router";
import Container from "./components/Container";
function App() {
  return (
    <>
      <div className="m-0 w-full min-h-screen from-cyan-500 via-sky-500 to-blue-400 bg-gradient-to-r text-white transform-none filter-none"> 
        <Hero />
        <Container>
          <AppRoutes />
        </Container>
      </div>
    </>
  );
}

export default App;



// update the home exactly as the other pages , 