import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  useQuery
} from "react-query";
import "./search.css";

function Search() {
  
  const [searchString, setSearchString] = useState<string>("");
 
  const getShows = async (searchString: string) => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchString}`
    );
    return data;
  };

  const { status, data } = useQuery(
    ['shows', searchString], 
    () => getShows(searchString),
    { enabled: !!searchString }
  );

  return (
    <>
      <input className="searchBox" type="search" placeholder="Find your show here..." onChange={(e) => setSearchString(e.currentTarget.value)}></input>
      {status === "loading" && (
        <div className="loader"></div>
      )}
      {data && (
        <ul className="searchResults">
          {data.map((item: any) => (
            <li key={item.show.id}>
              <Link to={`/shows/${item.show.id}`} className="searchResults__listItem">
                <div>
                  <h2 className="searchResults__title">{item.show.name}</h2>
                  <div className="searchResults__summary" dangerouslySetInnerHTML={{ __html: item.show.summary }}></div>
                </div>
                {item.show.image && <img className="searchResults__img" alt={item.show.name} src={item.show.image.medium} />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Search;