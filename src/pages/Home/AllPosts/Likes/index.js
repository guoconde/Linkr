import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useState, useEffect } from "react"
import { LikeOrDislike } from "./style"
import useApi from "../../../../hooks/useApi"
import useAuth from "../../../../hooks/useAuth"

export default function Likes({ postId, userId, isLike }) {

    const [liked, setLike] = useState(isLike)
    const [data, setData] = useState()
    const api = useApi()
    const { auth } = useAuth()



    console.log(liked)

    async function teste(postId, userId, value) {
        const headers = { headers: { Authorization: `Bearer ${auth?.token}` }}

        console.log(postId, userId, value, headers)

        if(data.rows.length === 0) return api.feed.insertLike(postId, userId, value, headers)

        api.feed.updateLike(postId, value, headers)
        setLike(!liked)
    }

    useEffect(() => {
        async function teste() {
            try {
                console.log(postId)
              const headers = { headers: { Authorization: `Bearer ${auth?.token}` }}
              console.log('estou aqui')
              let promisse = await api.feed.getLike(postId, headers);
      
              setData(promisse.data)
              console.log(promisse.data);
            //   setData(promisse.data);
            } catch (error) {
            //   if (error)
            //     return fireAlert(
            //       "An error occured while trying to fetch the posts, Plese refresh the page!"
            //     );
              console.log(error);
            }
          }
      
              teste();
    }, [liked])

    return (
        <>
            <LikeOrDislike>
                {
                    liked === false ?
                        <AiOutlineHeart onClick={() => teste(postId, userId, true)} color="white" /> :
                        <AiFillHeart onClick={() => teste(postId, userId, false)} color="red" />
                }
                <div className="number-of-likes">22 likes</div>
            </LikeOrDislike>
        </>
    )
}