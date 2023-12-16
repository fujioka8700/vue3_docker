// src/App.jsx
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import logo from "./assets/logo.svg";

function App() {
    return (
        <>
            <header>
                <img
                    alt="Vue logo"
                    class="logo"
                    src={logo}
                    width="125"
                    height="125"
                />

                <div class="wrapper">
                    <HelloWorld msg="You did it!" />
                </div>
            </header>
            <main>
                <TheWelcome />
            </main>
        </>
    );
}

export default App;
