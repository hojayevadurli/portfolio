import {useParams } from 'react-router-dom'

import ReactMarkdown from "react-markdown";

import { useEffect, useState } from "react"

// import CodeBlock from './CodeBlock';



const Blogs = () => {

    const { title } = useParams();

    const [content, setContent] = useState("");


    useEffect(() => {

        console.log("../" + title + ".md")

        fetch("../" +title + ".md")

            .then((res) => res.text())

            .then((text) => setContent(text));

    });

    console.log("in blogs")


    return (

        <div className='Blog'>

           <article>

            <ReactMarkdown children={content}  />

           </article>

        </div>

    );

}



export default Blogs;