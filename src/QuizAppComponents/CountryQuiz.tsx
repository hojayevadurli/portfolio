import { stringify } from 'querystring'
import React, { useContext, useEffect, useState } from 'react'
import { getCountries } from '../Services/CountryContext'
import "../styles/FlagQuiz.css"
// import styled from 'styled-components'

// const QuestionsContainer = styled.div`
//   padding-top: 2.5rem;
//   div {
//     text-align: start;
//   }
// `

type CountryType={
  getCountries(): string[]
}
export default function CountryQuiz() {
const temp = getCountries()
// console.log(temp)

  const [ country, setCountry ] = useState<
  {
    capital: string;
    flag: string;
    name:string
  }[]>([]);
 
async function settingCountries(){
    let countries: any = await getCountries()
    console.log(countries)
    //setCountry(countries)
    //let count: any = JSON.parse(getCountries())
    // let temp: any[] = JSON.parse(JSON.stringify(countries,null,2));

    // for(var i of countries){

    //   console.log(i)
    // }    
  };

  useEffect(()=>{
    settingCountries()
  },[])

// }
  // const randomQuestionNumber = Math.floor(Math.random() * 2)

  // const randomNumber1 = Math.floor(Math.random() * countries.length)

  
  // if ((!countries[randomNumber1].capital) || 
  //     (!countries[randomNumber1].flag)
  // ) {
  //   getCountries()
    
  // }

  return (
    <div>
        {/* {randomQuestionNumber === 0  
          ? <h2 className="question">
              {countries[randomNumber1].capital && countries[randomNumber1].capital} is the capital of?
            </h2>
          : (<div>
              <img src={countries[randomNumber1].flag} className="flag"/>
              <h2 className="question">
                Which country does this flag belong to?
              </h2>
          </div>)
        } */}
      </div>
  )
}

