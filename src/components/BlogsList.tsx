import { Grid } from "@mui/material";

import { motion } from "framer-motion";
import BlogTitle from "./BlogTitle";

// import BlogTitle from "../components/BlogTitle";



const BlogsList = () => {

    interface mdFile {

        name: string,

        description: string

    }

    // ,, ,  Hashmaps_Collections_Stacks

    const mdFileNames: mdFile[] = [{ name: "RoutingBlog", description: "Learn about Hash Maps, Collections, and Stacks in Javascript" }]

    // {name:"Javascript_Classes", description:"Learn about Javascript Classes"},

    // {name:"Python_TDD", description:"Learn about Python TDD"},

    // {name:"SCC_Algorithm", description:"Learn about the Strongly Connected Components Algorithm"},

    // {name:"Using_Filter_Sort_Includes_For_ApiData", description:"Learn how to combine Filter, Sort, and string.includes in your API calls"},
    // {name:"Randomized_DFS_Maze", description:"Learn how to create a text maze using Randomized Depth First Search"},

    // {name:"API_Calls_in_React_VS_in_ASP.NET", description:"Learn the differences between API calls in React and ASP.NET"},

    // {name:"Array_To_Binary_Search_Tree", description:"Learn how to make a Binary Search Tree From an Array"}]



    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center' }} container rowSpacing={1} columns={{ xs: 3, sm: 8, md: 12 }}>
            {mdFileNames.map(i =>

                <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', padding: '1em' }}>


                    <BlogTitle name={i.name} description={i.description} />

                </Grid>)}

        </Grid>);
}

export default BlogsList;

