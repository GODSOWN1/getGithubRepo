import React, {useState} from 'react';
import axios from 'axios';
import Results from './Results';
import "../App.css"

// This is the main function component that controls the 
// actions of the search-bar and the search button
function SearchBar() {

    const [searchInput, setSearchInput]= useState("");
    const [repos, setRepos] =useState([]);

    
    // This function handles the event when there are changes in the search-bar
    function handleChange(event){
        setSearchInput(event.target.value);
    }

    // This is an asynchronous function that handles the event when
    // the search button is clicked
    async function handleClick(){
        
        //Make an API request to Github to display the repositories of the searche user
        try {
            const result = await axios (`https://api.github.com/users/${searchInput}/repos?per_page=100`)
        setRepos(result);
        
        //Error handling
        } catch (error) {
            console.log(error);
        }
    }

    console.log(repos);
    return (
        <>
        <div className="container" style={{
            padding: "20px"
        }}>
        <div class="input-group">
            <input  value= {searchInput} onChange={handleChange} type="search" class="form-control rounded cana" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
                <button onClick={handleClick} type="button" class="btn btn-outline-primary cana" data-testid ="search-button">Search</button>
        </div>
            
        </div>
        <Results repos={repos}/> {/*the repos are used as props in the Results component*/}
        </>
    )
}


export default SearchBar;