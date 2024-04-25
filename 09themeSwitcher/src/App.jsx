import { useEffect , useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const [themeMode , setThemeMode] = useState("light");
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light" , "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value = {{themeMode , darkTheme , lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center bg-red-500 dark:bg-lime-400">
      <div className="w-full">
        <div className="w-full mt-6 max-w-sm mx-auto flex justify-center mb-4">
        {/* themeBtn */}
          <ThemeBtn/>
        </div>

        <div className="w-full mt-6 max-w-sm mx-auto justify-center">
          {/* Card */}
          <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
