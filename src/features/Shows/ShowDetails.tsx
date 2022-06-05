import { useParams } from 'react-router-dom';
import axios from "axios";
import {
  useQuery
} from "react-query";
import "./showdetails.css";

function ShowDetails() {
  let { id } = useParams();

  const getShow = async (id: string | undefined) => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/shows/${id}`
    );
    return data;
  };

  const { status, data } = useQuery(
    ['show', id], 
    () => getShow(id),
    { enabled: !!id },
  );

  if (status === "success") {
    return (
      <div>
        <div className="headline__container">
          <h1 className="title">{data.name}</h1>
          {data.image && <img alt={data.name} src={data.image.medium} />}
        </div>
        <div className="summary" dangerouslySetInnerHTML={{ __html: data.summary }} />
      </div>
    );
  }

  return null;

}

export default ShowDetails;