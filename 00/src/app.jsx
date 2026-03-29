import { useState } from "react";
import './app.css';

function App() {
    const [counter, setCounter] = useState(0)

    return (
    <>
    <section>
        <h1>Please Click Me!</h1>
        <button onClick={() => setCounter((counter) => counter + 1)}>
            Click number {counter}.
        </button>
    </section>
    </>
    );
};

export default App