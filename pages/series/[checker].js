import React, {useEffect, useState} from 'react'
import { Header, Post } from '../../components/seriesDetails';
import { Footer, Navbar } from '../../components/utils';

function Checker({ pageData, url }) {
    
    const [seriesData, setPagedata] =useState(pageData[0])
    const [relatedPost, setRelatedPost] =useState([])
    const [recentPost, setRecentPost] =useState([])     

        useEffect(() => {
            async function getPageData() {
                const apiURLEndPoint = `/api/getSeries`;
                const res = await fetch(apiURLEndPoint);
                const data = await res.json()
            
                setRelatedPost(data.relatedPost)
                setRecentPost(data.recentPost)                 
            }
            getPageData()
        }, []);    
    
    return (
        <>
            <Navbar />
            <Header topic={seriesData?.topic} bgImage={seriesData.image_path}/>
            <Post data={seriesData} relatedPost ={relatedPost}  recentPost={recentPost}/>
            <Footer />
        </>
    )
}

export default Checker

export async function getServerSideProps({ params }) {
    let url = process.env.WORD_ALIVE_URL_PROD;
   
    const apiURLEndPoint = `${url}/api/getSeries`;
    const id = params.checker;
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
        }),
    };



    // Post Method
    const res = await fetch(apiURLEndPoint, options);    
    const data = await res.json()   

    if (data.seriesByID == undefined || data.status === "404") {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {
            pageData: data.seriesByID,
            url: url
        }
    }
}
