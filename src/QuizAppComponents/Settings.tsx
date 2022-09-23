
import React, { useEffect, useState } from 'react';
type TriviaCategory={
    id:number,
    name: string
}
function Settings() {
    // useState hook 
	const [options, setOptions] = useState<TriviaCategory[]>([]);
    // useEffect hook
    const [questionCategory, setQuestionCategory] = useState("");
	// useEffect hook
	useEffect(() => {
	    const apiUrl = `https://opentdb.com/api_category.php`;
	
	    fetch(apiUrl)
	      .then((res) => res.json())
	      .then((response) => {
	        setOptions(response.trivia_categories);
	      });
	  }, [setOptions]);
      // event that is called when an option is chosen
      const handleCategoryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setQuestionCategory(event.target.value)
      }
	return (
		<div>
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
            })}
          </select>
        </div>
		</div>
	);
}
export default Settings;