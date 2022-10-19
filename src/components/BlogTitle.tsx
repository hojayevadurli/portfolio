import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const BlogTitle: React.FC<{ name: string, description:string }> = (props) => {
    return (

        <div>

            <Link to={props.name}>

                <motion.button whileHover = {{scale:1.2}} whileTap = {{scale:1.0}}  style={{background:'transparent', borderRadius:'2em', borderColor:'white'}}>

                    <h4>{props.name}</h4>

                    <p style={{textAlign:'center', color:'#affc41'}}>{props.description}</p>

                </motion.button>

            </Link>

        </div>

    );

}





export default BlogTitle;