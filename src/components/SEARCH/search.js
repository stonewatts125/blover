import { useEffect, useState } from 'react'
import './search.css'

function Search() {
  const [searchs, setSearchs] = useState([])
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {

    fetch('http://localhost:3000/search')
    .then(respeonse => respeonse.json())
    .then(json => setSearchs(json))
  },[searchs])


  return (
    <section className='Search'>
        
        <div id='bottom'></div>
        <div id='top'>
            <div id='srch-ttl'>SEARCH BLOVER GROUP</div>
            <input type='text' id='search-input-field' 
            placeholder='Search for news, jobs, documentations...' 
            onChange={(e) => {setSearchValue(e.target.value)}}/>
            <div id='rs-ttl'>Result:</div>
            <div id='result'>
              {
                searchs.filter((search) => {
                  if(searchValue == ''){
                    return ''
                  }
                  else if(
                  (search.search_name.toLowerCase().includes(searchValue.toLowerCase()))
                  || 
                  (search.type.toLowerCase().includes(searchValue.toLowerCase()))
                  ){
                     return search
                  } 
                }).map((search, index) => {
                   return(
                     <div className='result-item' key={index} onClick={() => { window.location = search.link}}>{search.search_name}</div>
                   )
                })
              }
                
            </div>

        </div>
      
    </section>
  )
}

export default Search