import { getAllProjects, getProjectBySlug } from '../../lib/projects'
import markdownToHtml from '../../lib/markdown'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import Head from "next/head"
import LatestGrid from '../../components/display/LatestGrid'
import LatestProjectDisplay from '../../components/display/LatestProjectDisplay'

const ProjectHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    min-height: 40vh;
    background-color: var(--color-background-slightly-lighter);
    flex-direction: column;
    user-select: none;

    @media (max-width: 768px) {
        min-height: 70vh;
    }
`

const ProjectTitle = styled.h1`
    max-width: 1000px;
    text-align: center;
    color: var(--color-accent);
    font-size: 2.5rem;
    font-weight: 400;
`

const ProjectQuickInfo = styled.div`
    max-width: 800px;
    text-align: center;
    color: var(--color-tertiary);
    font-size: 1.2rem;
    font-weight: 400;
`

const ProjectDescription = styled.div`
    max-width: 800px;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 1.5rem;
    text-align: center;
`

const ProjectContent = styled.main`
    max-width: 60vw;
    margin: 0 auto;
    padding-top: 2rem;

    @media (max-width: 768px) {
        max-width: 90vw;
    }
`

const TagSpace = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Tag = styled.div`
    background-color: var(--color-quaternary-darker);
    color: var(--color-background);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
`

const SeeMoreButtons = styled.div`
    display: flex;
    gap: 0.5rem;
`

const SeeMoreButton = styled.a`
    background-color: var(--color-background-slightly-lighter);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
`

const Project = ({ project, latestProjects }: { project: any, latestProjects: any }) => {
    const router = useRouter()

    if (!router.isFallback && !project?.slug) {
        return (
            <>
                <Head>
                    <meta property="og:title" content="Project not found" />
                    <meta property="og:image" content="https://aidanthebandit.com/opengraph.png" />
                    <meta property="og:description" content="Sorry for that" />
                </Head>
                <Navbar />
                <ProjectHeader>
                    <ProjectTitle>Project not found</ProjectTitle>
                    <ProjectQuickInfo>Sorry for that</ProjectQuickInfo>
                </ProjectHeader>
            </>
        )
    }

    return (
        <>
            <Head>
                <meta property="og:title" content={project.title} />
                <meta property="og:image" content={project.ogImage ?? "https://aidanthebandit.com/opengraph.png"} />
                <meta property="og:description" content={project.description} />
            </Head>
            <Navbar />
            <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectQuickInfo>{project.team && "Team effort · "}{project.years?.join(", ")}</ProjectQuickInfo>
                <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectHeader>
            <ProjectContent className="markdown-dynamic-content">
                <h2>Tech</h2>
                <TagSpace>
                    {project.tech?.map((tech: string) => (
                        <Tag key={tech}>{tech}</Tag>
                    ))}
                </TagSpace>
                <h2>About</h2>
                <article dangerouslySetInnerHTML={{ __html: project.content }} />
                <h2>Categories</h2>
                <TagSpace>
                    {project.categories.map((category: string) => (
                        <Tag key={category}>{category}</Tag>
                    ))}
                </TagSpace>
                {project.buttons?.length > 0 ? <>
                    <h2>See more</h2>
                    <SeeMoreButtons>
                        {project.buttons.map((button: { link: string, text: string }) => (
                            <SeeMoreButton key={button.link} href={button.link}>{button.text}</SeeMoreButton>
                        ))}
                    </SeeMoreButtons>
                </> : null}
            </ProjectContent>
            <LatestGrid
                items={latestProjects}
                component={LatestProjectDisplay}
                heading={"Latest Projects"}
                useCompactColumns={true}
                allItemsLink={"/projects"} />
        </>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export const getStaticProps = async ({ params }: Params) => {
    const project = getProjectBySlug(params.slug, [
        'title',
        'description',
        'coverImage',
        'content',
        'years',
        'ogImage',
        'slug',
        'tech',
        'categories',
        'buttons',
        'team'
    ])
    const content = await markdownToHtml(project.content || '# no content')

    const allProjects = getAllProjects(["title", "slug", "coverImage", "description"])

    return {
        props: {
            project: {
                ...project,
                content,
            },
            latestProjects: allProjects.slice(0, 4),
        },
    }
}


export const getStaticPaths = async () => {
    const projects = getAllProjects(["slug"])

    return {
        paths: projects.map((project) => {
            return {
                params: {
                    slug: project.slug,
                },
            }
        }),
        fallback: false,
    }
}

export default Project