import { Country } from "../QuizAppComponents/CountryQuiz";
// import axios from "axios"
export const getCountries=()=>{
    const apiUrl = `https://restcountries.com/v3.1/all`;

      fetch(apiUrl)
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            return response.data as Country[]         
        });

      
}