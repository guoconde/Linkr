import { useState, useEffect } from "react";
import useApi from "../../../hooks/useApi";
import {
    Container,
    ContainerPost,
    ContainerImage,
    Name,
    Image,
    Description,
    Link,
    Content,
    MetaLink,
    ImagePost,
} from "./style";
import { Watch } from "react-loader-spinner";
import { fireAlert } from "../../../utils/alerts";
import HighlightHashtag from "./HighlightHashtags/HighlightHashtag";
import Likes from "./Likes";

export default function AllPosts() {
    const [data, setData] = useState();
    const api = useApi();

    useEffect(() => {
        async function teste() {
            try {
                const promisse = await api.posts.getAllPosts();

                setData(promisse.data);
                console.log(promisse.data);
            } catch (error) {
                if (error)
                    return fireAlert(
                        "An error occured while trying to fetch the posts, Plese refresh the page!"
                    );
                console.log(error);
            }
        }

        teste();

        // eslint-disable-next-line
    }, []);

    if (!data)
        return (
            <Content>
                <Watch color="white" message="Teste" ariaLabel="loading-indicator" />
                <div>Loading...</div>
            </Content>
        );

    if (data.length === 0)
        return (
            <Content>
                <div>There are no posts yet!</div>
            </Content>
        );

    return (
        <>
            {data.map((el, i) => (
                <Container key={i}>
                    <ContainerImage>
                        <Image src={el.photo} />
                        <Likes></Likes>
                    </ContainerImage>
                    <ContainerPost>
                        <Name>{el.name}</Name>
                        <Description><HighlightHashtag>{el.description}</HighlightHashtag></Description>
                        <MetaLink>
                            <div className="infoPost">
                                <p className="title">{el.metadataTitle}</p>
                                <p className="description">{el.metadataDescription}</p>
                                <Link href={el.url} target="_blank">
                                    {el.url}
                                </Link>
                            </div>
                            <ImagePost backgroundImage={el.metadataImage} />
                        </MetaLink>
                    </ContainerPost>
                </Container>
            ))}
        </>
    );
}
