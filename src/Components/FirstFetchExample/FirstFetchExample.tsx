import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import "./FirstFetchExample.css";

type Repository = {
    id: number,
    name: string,
    full_name: string,
    description: string,
    owner: {
        avatar_url: string,
    },
    login: string,
    url: string
}


function FirstFetchExample() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/thiagolucio/repos')
            .then(response => response.json())
            .then(data => {
                setRepositories(data);
                console.log(data);
            })
    }, [])

    return (
        <ul className="list_container">
            {repositories.map(repo => {
                return (
                    <li key={repo.id}>
                        <div className="card_repos">
                            <img src={repo.owner.avatar_url} alt="avatar" title="avatar" className="avatar" />
                            <div className="card_title_repos">
                                <GoRepoForked /> {repo.name}
                            </div>
                            <p>  <FaGithub /> {repo.full_name}</p>
                            <p>{repo.login}</p>
                            <a href={repo.url} className="button_repos">
                                Visite
                            </a>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}
export default FirstFetchExample;