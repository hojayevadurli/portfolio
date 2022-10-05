import axios from "axios";
import { Country } from "../QuizAppComponents/CountryQuiz";


export const getCountries = async () => {
    const apiUrl = `https://restcountries.com/v3.1/all`;
    const apiClient=axios.create();
    const res = await apiClient.get(apiUrl);
    return res.data as Country[];
  }