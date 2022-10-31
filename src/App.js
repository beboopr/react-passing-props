import Welcome from "./components/Welcome";

const names = ['Brad', 'Gaby', 'Art', 'Gerly', 'Jonathan']

function App() {
  return (
    <>
   <h1>Passing Props</h1>
   {names.map(name => (
     <Welcome key={name} name={name[0]} />
   ))}
   <Welcome name={name[1]} />
   <Welcome name={name[2]} />
  
   </>
  );
}

export default App;
