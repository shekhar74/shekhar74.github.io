
import React,{useEffect} from 'react'
import styled from 'styled-components';
import GithubCalendar from 'react-github-calendar'
import stats from "../Resources/Images/stats.png"
import Aos from "aos";
import "aos/dist/aos.css";
const Github = () => {

    useEffect(() => {
        Aos.init({duration:2000})
       })

    return (
        <MainContainer style={{ marginTop: "-20px" }} >
            <h1 style={{ color: "#343a40", textTransform: "uppercase" }}>Github Contibution</h1>
            <Container data-aos='fade-right'>
                <GithubCalendar username='shekhar74'year={new Date().getFullYear()} blockSize={15} blockMargin={5} fontSize={16} />
            </Container>
            <img src={stats} alt="github stats" data-aos='fade-right' />
        </MainContainer>
    )
}

const Container = styled.div`
    margin:auto;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:50px;
    flex-direction:column;
    // border: 4px solid #23465a;
    border-radius:10px 10px 10px 10px;
    padding:30px 0px 30px 0px;
    
`



const MainContainer = styled.div`
    @media (max-width: 50em){
        display:none;
    }
`

export default Github