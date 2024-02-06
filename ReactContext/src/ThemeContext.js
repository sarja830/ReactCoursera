import { useContext, createContext, useState } from "react";



// This is the function that gives you a new context object back
const ThemeContext = createContext(undefined);



//  you need to create a provider component.
//  To do so, I will call it UserProvider and render the UserContext.Provider component.
export const ThemeProvider = ({ children }) => {



    const [theme, setTheme] = useState("light");
    // The UserContext.Provider component is what allows consuming components to subscribe to context changes.
    //  This component accepts a value prop, which is what will be passed to consuming components that are descendants of this provider.
    return(
    <ThemeContext.Provider value={{
        theme,
        toggleTheme: ()=>(setTheme(theme==="light"?"dark":"light"))
    }}
    >
        {children  }
  </ThemeContext.Provider>)
    
};



 // it's necessary to provide a way for components to subscribe to the context. 
//  For that, I am going to create a custom hook that wraps the use context hook, which is the way to consume a context value.
export const useTheme = () => useContext(ThemeContext)
