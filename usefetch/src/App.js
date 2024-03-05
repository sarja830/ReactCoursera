// import React, {useEffect} from "react";
//
// function App() {
//   const [user, setUser] = React.useState([]);
//     // const fetchData = () => {
//     //     fetch("https://randomuser.me/api/?results=1")
//     //         .then((response) => response.json())
//     //         .then((data) => {
//     //             console.log(data.results)
//     //             setUser(data)
//     //         });
//     //
//     // };
//
//     const fetchData = ()=>{
//     fetch("https://randomuser.me/api/?results=1")
//         .then(response=> response.json())
//         .then((data)=> {
//             console.log(data.results)
//             setUser(data.results);
//         })
//         .catch((error)=>{console.log(error)});
//   }
//
//   useEffect(()=>{
//       fetchData()
//   },[])
//
//
//   return Object.keys(user).length > 0 ? (
//       <div style={{padding: "40px"}}>
//         <h1>Customer data</h1>
//         <h2>Name: {user[0].name.first}</h2>
//         <img src={user[0].picture.large}></img>
//       </div>
//   ) : (
//       <h1>Data pending...</h1>
//   );
// }
//
// export default App;
import React from "react";

function App() {
    const [user, setUser] = React.useState([]);

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data=> setUser(data.results))
            .catch(error=>{console.log(error);})
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return Object.keys(user).length > 0 ? (
        <div style={{padding: "40px"}}>
            <h1>Customer data</h1>
            <h2>Name: {user[0].name.first}</h2>
            <img src={user[0].picture.large}></img>
        </div>
    ) : (
        <h1>Data pending...</h1>
    );
}

export default App;
