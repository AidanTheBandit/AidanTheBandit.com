import InitialIntroduction from "../components/index/InitialIntroduction"
import LatestGrid from "../components/display/LatestGrid"
import { getAllPosts } from "../lib/posts"
import { Post, Project } from "../lib/types"
import Head from "next/head"
import LatestPostDisplay from "../components/display/LatestPostDisplay"
import { getAllProjects } from "../lib/projects"
import LatestProjectDisplay from "../components/display/LatestProjectDisplay"

type Props = {
    allPosts: Post[],
    allProjects: Project[]
}

const Home = ({ allPosts, allProjects }: Props) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="AidanTheBandit" />
                <meta property="og:image" content="https://aidanthebandit.com/opengraph.png" />
                <meta property="og:description" content="Hello. I'm Bandit." />
            </Head>
            <InitialIntroduction />
            <LatestGrid
                items={allPosts}
                component={LatestPostDisplay}
                heading={"Latest Posts"}
                allItemsLink={"/posts"} />
            <LatestGrid
                items={allProjects}
                component={LatestProjectDisplay}
                heading={"Latest Projects"}
                useCompactColumns={true}
                allItemsLink={"/projects"} />
        </>
    )
}


export const getStaticProps = async () => {
    const allPosts = getAllPosts(["title", "slug", "coverImage", "description", "date"])
    const allProjects = getAllProjects(["title", "slug", "coverImage", "description", "year"])
    return {
        props: {
            allPosts: allPosts.slice(0, 4),
            allProjects: allProjects.slice(0, 4)
        }
    }
}

export default Home
