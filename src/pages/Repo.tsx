import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "../Components/QueryComponent/QueryComponent";

export function Repo() {

    const params = useParams();
    const currentRepository = params['*'] as string;

    const queryClient = useQueryClient();

    async function handleChangeRepositoryDescription() {
        // await queryClient.invalidateQueries(['respos']);
        const previousRepos = queryClient.getQueryData<Repository[]>('repos');

        if (previousRepos) {
            const newRepos = previousRepos.map(repo => {
                if (repo.full_name === currentRepository) {
                    return {...repo, description: 'new description'};
                } else {
                    return repo;
                }
            })

            queryClient.setQueryData('repos', newRepos);
        }
    }


    return (
        <>
        <h1>{currentRepository}</h1>
        <button onClick={handleChangeRepositoryDescription}>Change repository description</button>
        </>
    )
}