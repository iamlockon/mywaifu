import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { HiArrowRight } from "react-icons/hi";

import './Blog.css';
import { BlogContext } from '../../contexts/blogContext/BlogContext';
import { blogData } from '../../data/blogData'
import SingleBlog from './singleBlog/SingleBlog';
import { useBlogContext } from '../../contexts';


const PREFIX = 'Blog';

const classes = {
    viewAllBtn: `${PREFIX}-viewAllBtn`,
    viewArr: `${PREFIX}-viewArr`
};

const Root = styled('div')((theme) => ({
    [`& .${classes.viewAllBtn}`]: {
        color: theme.tertiary, 
        backgroundColor: theme.primary,
        "&:hover": {
            color: theme.secondary, 
            backgroundColor: theme.primary,
        }
    },

    [`& .${classes.viewArr}`]: {
        color: theme.tertiary, 
        backgroundColor: theme.secondary70,
        width: '40px',
        height: '40px',
        padding: '0.5rem',
        fontSize: '1.05rem',
        borderRadius: '50%',
        cursor: 'pointer',
        "&:hover": {
            color: theme.tertiary, 
            backgroundColor: theme.secondary,
        }
    }
}));


function Blog() {
    const { theme } = useBlogContext();
    return (
        (<Root theme={theme} className='flex h-screen'>
            {blogData.length > 0 && (
                <div className="blog" id="blog" style={{backgroundColor: theme.secondary}}>
                    <div className="blog--header">
                        <h1 style={{color: theme.primary}}>Blog</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleBlog 
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div> 

                        {blogData.length > 3 && (
                            <div className="blog--viewAll">
                                <Link to="/blog">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {blogData.length == 0 && <div className='m-auto'>Sorry, this page is still under construction...</div>}
        </Root>)
    );
}

export default Blog
