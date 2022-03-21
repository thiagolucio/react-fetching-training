import axios from "axios";
import { FaGithub } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./QueryComponent.css";

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  login: string;
  url: string;
};

function QueryComponent() {
  const { data: repositories, isLoading } = useQuery<Repository[]>(
    "repos",
    async () => {
      const response = await axios.get( "https://api.github.com/users/thiagolucio/repos" );
      return response.data;
    },
    // {
    //  refetchOnWindowFocus: false, // inibir o refresh da query quando a tela for focada
    // }
    {
      staleTime: 1000 * 60, // 1 minuto OU  * 60, // 1 hora
    }
  );

  return (
    <div className="list_container">
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="list_container">
          {repositories?.map((repo) => {
            return (
              <li key={repo.id}>
                <div className="card_repos">
                  <img
                    src={repo.owner.avatar_url}
                    alt="avatar"
                    title="avatar"
                    className="avatar"
                  />
                  <div className="card_title_repos">
                    <GoRepoForked /> {repo.name}
                  </div>
                  <p>
                    <Link to={`repos/${repo.full_name}`}>
                      {" "}
                      <FaGithub /> {repo.full_name}                    
                    </Link>
                  </p>
                  <p>{repo.login}</p>
                  <a href={repo.url} className="button_repos">
                    Visite
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default QueryComponent;
