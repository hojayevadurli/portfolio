
import React, { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';

type TriviaCategory={
    id:number,
    name: string
}
function Settings() {
    // useState hook 
  const [loading, setLoading] = useState(false);

	const [options, setOptions] = useState<TriviaCategory[]>([]);
    // useEffect hook
    const [questionCategory, setQuestionCategory] = useState("");
    const [questionDifficulty, setQuestionDifficulty] = useState("");
    const [questionType, setQuestionType] = useState("");

    const [numberOfQuestions, setNumberOfQuestions] = useState(50);

  
	// useEffect hook

	useEffect(() => {
	    const apiUrl = `https://opentdb.com/api_category.php`;
      setLoading(true);

	    fetch(apiUrl)
	      .then((res) => res.json())
	      .then((response) => {
          setLoading(false);

	        setOptions(response.trivia_categories);
	      });
	  }, [setOptions]);
      // event that is called when an option is chosen
      const handleCategoryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setQuestionCategory(event.target.value)
      }

      const handleDifficultyChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setQuestionDifficulty(event.target.value)
      }
      const handleTypeChange = (event: { target: { value: any; }; }) => {
        setQuestionType(event.target.value)
      }
      const handleNumberOfQuestions = (event: { target: { value: React.SetStateAction<number>; }; }) => {
        setNumberOfQuestions(event.target.value)
      }
      
      
	return (
		<div>
        <h1>Quiz App</h1>
			<div>
          <h2>Select Category:</h2>
          <select value={questionCategory} onChange={handleCategoryChange}>
            <option>All</option>
            {options?.map((option) => {
                return (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>                              
                );                
            }) 
            }            
          </select>       
           
        </div>
         {/* {
           if({questionCategory}==='22')
           {
             console.log({questionCategory})
             // <Navigate to="/CountryQuiz" />
           }  
         } */}
{/* 
        {questionCategory==='22'? <Settings /> : <Navigate to="/CountryQuiz" />} */}

       <h1>GOT HERE</h1>
        {/* <div>
          <h2>Select Difficulty:</h2>
          <select value={questionDifficulty} onChange={handleDifficultyChange}>
            <option value="" key="difficulty-0">All</option>
            <option value="easy" key="difficulty-1">Easy</option>
            <option value="medium" key="difficulty-2">Medium</option>
            <option value="hard" key="difficulty-3">Hard</option>
          </select>
        </div>

        <div>
          <h2>Select Question Type:</h2>
          <select value={questionType} onChange={handleTypeChange}>
            <option value="" key="type-0">All</option>
            <option value="multiple" key="type-1">Multiple Choice</option>
            <option value="boolean" key="type-2">True/False</option>
          </select>
        </div> */}  
         
		</div>
    
    
    
	);
}
export default Settings;