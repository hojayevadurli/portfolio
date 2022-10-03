import React from "react";
// import { useEffect, useState } from "react";

// // interface CountryType {
// //   name: string,    
// //   capital: string,
// //   flags: string,
// //   languages:string,
// //   continents: string}
  
// //   const initialState = {
// //     name: 'Turkmenistan',
// //     capital: 'Ashgabat',
// //     flags: 'flag',
// //     languages:'Turkmen',
// //     continents: 'Asia'
// //   };

// const CountriesContext = React.createContext();
// const apiUrl = `https://restcountries.com/v3.1/all`;

// function CountriesContextProvider (props) {
//   const [countries, setCountriesName] = useState([])
//   const [score, setScore] = useState(0)

//   const getCountries = async () => {
//     const res = await fetch(apiUrl)
//     const data = await res.json()
//     setCountriesName(data)
//   }

//   useEffect (() => {
//     getCountries()
//   }, [])

//   return (
//     <CountriesContext.Provider 
//       value={{
//         countries , 
//         getCountries,
//         score,
//         setScore,
//       }}
//     >
//       {props.children}
//     </CountriesContext.Provider>
//   )
// }

// export { CountriesContextProvider , CountriesContext };
