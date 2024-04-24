// import { useParams } from "react-router-dom";

// const GithubInfoLoader = async ({params}) => {
//     const { userid } = useParams();
//     const response = await  fetch(`https://api.github.com/users/${userid || 'amank736836'}`)
//     return response.json()
// }

// export default GithubInfoLoader;

const GithubInfoLoader = async () => {
    console.log("fetching");
    const response = await fetch('https://api.github.com/users/amank736836')
    return response.json()
}

export default GithubInfoLoader;