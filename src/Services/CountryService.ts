type CountryPropTypes={
    

}

export const getCountries=()=>{
    const apiUrl = `https://restcountries.com/v3.1/all`;

      fetch(apiUrl)
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            return response.data          
        });

      
}
