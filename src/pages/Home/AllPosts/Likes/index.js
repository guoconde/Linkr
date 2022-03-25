import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useState } from "react"
import { LikeOrDislike } from "./style"
import useApi from "../../../../hooks/useApi"
import useAuth from "../../../../hooks/useAuth"

export default function Likes({ postId, isLike }) {

    if(isLike === null) isLike = false

    const [liked, setLike] = useState(isLike)
    const api = useApi()
    const { auth } = useAuth()

    console.log(liked)

    async function teste(postId, value) {
        const headers = { headers: { Authorization: `Bearer ${auth?.token}` }}

        if(value) await api.feed.insertLike(postId, auth.userId, value, headers)
        else await api.feed.deleteLike(postId, auth.userId, value, headers)

        setLike(value)
    }

    return (
        <>
            <LikeOrDislike>
                {
                    liked === false ?
                        <AiOutlineHeart onClick={() => teste(postId, true)} color="white" /> :
                        <AiFillHeart onClick={() => teste(postId, false)} color="red" />
                }
                <div className="number-of-likes">22 likes</div>
            </LikeOrDislike>
        </>
    )
}