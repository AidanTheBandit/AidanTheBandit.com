import styled from "styled-components"
import { ChevronDown } from "@styled-icons/boxicons-regular"
//import Lottie from "lottie-react"
//import helloJson from "../../animations/hello.json"

const IntroductionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--color-background-darker);
    color: var(--color-accent);
    cursor: default;
    flex-direction: column;
`

const Introduction = styled.div`
    min-width: 75vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        min-height: 25vh;
    }
`

const NameIntroduction = styled.div`
    width: max(20vw, 300px);
    line-height: 0.4;
`

const GitHubSection = styled.div`
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--color-tertiary);
    text-align: right;
`
const SoftSection = styled.div`
    width: max(20vw, 300px);
    line-height: 0.4;
    color: var(--color-tertiary);

`

const GitHubLink = styled.a`
    color: var(--color-accent);
    text-decoration: none;
    display: block;
`

const ScrollChevron = styled(ChevronDown)`
    height: 50px;
    margin-bottom: 10px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }
`

const InitialIntroduction = () => {
    return (
        <IntroductionWrapper>
            <Introduction>
                <NameIntroduction>
                    <h1>Hello! I'm Aidan.</h1>
                    <SoftSection>
                    <h1>I make software.</h1>
                    </SoftSection>
                </NameIntroduction>
                <GitHubSection>
                    <GitHubLink
                        href="https://github.com/AidanTheBandit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/AidanTheBandit »
                    </GitHubLink>
                    or scroll down
                </GitHubSection>
            </Introduction>
            <ScrollChevron
                onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    })
                }}
            />
        </IntroductionWrapper >
    )
}

export default InitialIntroduction