import useApi from "../../../hooks/useApi"

export default function AllPosts() {

    const api = useApi()

    async function teste() {
        try {
            const { data } = await api.posts.getAllPosts()

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    teste()

    return (
        <div>
            estou aqui
        </div>
    )
}