import React from 'react';
import styled from 'styled-components';
import dnalp from '../Resources/Images/Project/dnalp.png';
import Gearbest from '../Resources/Images/Project/Gearbest.png';
import sensemen from '../Resources/Images/Project/sensemen.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';
// import { useState } from 'react';


const Projects = () => {

    // const [state, setState] = useState('')
    const projects = [
        {
            id: 1,
            title: 'Dna-India',
            img: dnalp,
            desc: 'DNA India is an India-based online news website that covers all the latest and breaking news on Politics, Business, Sports, Bollywood, and Technology news.',
            worked: 'A collaborative project, built in 5 days by a team of 5 developers.',
            keyPoint2: 'This is our first project at Masai School.',
            keyPoint1: 'Group project',
            githubLink: 'https://github.com/sameerbhavar/dnaindia.com',
            deployedLink: 'https://marvelous-dolphin-b7b476.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id: 2,
            title: 'Gearbest',
            img: Gearbest,
            desc: 'A lifestyle store is a retail store selling a wide variety of product categories under a single brand. It is designed to associate a brand with one or another aspirational lifestyle. Lifestyle stores may include clothing, housewares,etc.',
            worked: 'This is an individual project completed in 5 days.',
            keyPoint1: 'local json server used',
            keyPoint2: '',
            githubLink: 'https://github.com/shekhar74/meek-calculator-9744',
            deployedLink: 'https://gearbestdotcom.vercel.app/',
            tags: ['HTML', 'CSS', 'Reactjs', 'Chakra-Ui']
        },
        {
            id: 3,
            title: 'Ssense',
            img: sensemen,
            desc: 'SSENSE is a multi-brand retailer based in Montreal, Canada specialising in the sale of designer fashion and high end streetwear.',
            worked: 'This is an individual project. It was completed in 4 days',
            keyPoint2: '',
            keyPoint1: '',
            githubLink: 'https://github.com/shekhar74/naive-plot-5053',
            deployedLink: 'https://ssense-eight.vercel.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        }
    ]

    return (
        <Container id='projects'>
            <h1>Projects</h1>
            <div className='projectsContainer' >
                {projects.map((ele, index) => (
                    <div key={index} className="box">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='120%' height='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                <a href={ele.githubLink} rel="noreferrer" target="_blank"><button><GitHubIcon />Github</button></a>
                                <a href={ele.deployedLink} rel="noreferrer" target="_blank"><button><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    h1{
        color:#343a40;
        text-transform:uppercase;
    }

    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .box{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border: 10px solid lightgrey;
        border-radius: 20px;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
        width:100%;
    }

    // .imgBox>img:hover{
    //     position:absolute;
    //     width:80%;
    //     transform: scale(1.3);
    //     transform-origin: 0% 0%;
    // }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:teal;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:#222e50;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
        font-weight:bold;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects