// import "./App.css";
// import { ThemeProvider, useTheme } from "./ThemeContext";
// import Switch from "./Switch";
//
// const Title = ({ children }) => {
//   // this is imported from themeContext
//   const { theme } = useTheme();
//   return (
//     <h2
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </h2>
//   );
// };
//
// const Paragraph = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <p
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </p>
//   );
// };
//
// const Content = () => {
//   return (
//     <div>
//       <Paragraph>
//         We are a pizza loving family. And for years, I searched and searched and
//         searched for the perfect pizza dough recipe. I tried dozens, or more.
//         And while some were good, none of them were that recipe that would
//         make me stop trying all of the others.
//       </Paragraph>
//     </div>
//   );
// };
//
// const Header = () => {
//   return (
//     <header>
//       <Title>Little Lemon 🍕</Title>
//       <Switch />
//     </header>
//   );
// };
//
// const Page = () => {
//   return (
//     <div className="Page">
//       <Title>When it comes to dough</Title>
//       <Content />
//     </div>
//   );
// };


import React, { useState, useMemo } from 'react';

const MyComponent = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    // Expensive computation that we want to memoize
    const expensiveValue = useMemo(() => {
        console.log('Recalculating expensiveValue');
        return countA * countB;
    }, [countA, countB]); // Dependency array

    return (
        <div>
            <p>Count A: {countA}</p>
            <button onClick={() => setCountA(countA + 1)}>Increment A</button>

            <p>Count B: {countB}</p>
            <button onClick={() => setCountB(countB + 1)}>Increment B</button>

            <p>Expensive Value: {expensiveValue}</p>
        </div>
    );
};

// export default MyComponent;

function App() {
  // const { theme } = useTheme();
  return (<div>
        <MyComponent>

        </MyComponent>
    </div>);
  // return (
  //   <div
  //     className="App"
  //     style={{
  //       backgroundColor: theme === "light" ? "white" : "black",
  //     }}
  //   >
  //     <Header />
  //     <Page />
  //   </div>
  // );
}

function Root() {
  return (
    //  The user context is now defined, but the app is still not aware of it.
    //  For that, the provider component is needed, so I'll go ahead and wrap the whole app with it.
    // <ThemeProvider>
      <App />
    // </ThemeProvider>
  );
}

export default Root;
