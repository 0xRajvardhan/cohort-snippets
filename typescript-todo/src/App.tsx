import "./App.css";

function App() {
  return <>
    <Todo title="Learn React" description="Learn React by building a todo app." />
    <Todo title="Learn TypeScript" description="Learn TypeScript by building a React app." />
  </>;
}

interface TodoProps {
  title: string;
  description: string;
}

function Todo(props: TodoProps) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </>
  );
}

export default App;
