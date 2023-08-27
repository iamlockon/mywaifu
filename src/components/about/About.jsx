import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';

import './About.css';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';
import { AboutContext } from '../../contexts/aboutContext/AboutContext';

const PREFIX = 'About';

const classes = {
    resumeBtn: `${PREFIX}-resumeBtn`,
    contactBtn: `${PREFIX}-contactBtn`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.resumeBtn}`]: {
        color: theme.primary,
        borderRadius: '30px',
        textTransform: 'inherit',
        textDecoration: 'none',
        width: '150px',
        fontSize: '1rem',
        fontWeight: '500',
        height: '50px',
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: '100ms ease-out',
        '&:hover': {
            backgroundColor: theme.tertiary,
            color: theme.secondary,
            border: `3px solid ${theme.tertiary}`,
        },
        [theme.breakpoints.down('sm')]: {
            width: '180px',
        },
    },

    [`& .${classes.contactBtn}`]: {
        backgroundColor: theme.primary,
        color: theme.secondary,
        borderRadius: '30px',
        textTransform: 'inherit',
        textDecoration: 'none',
        width: '150px',
        height: '50px',
        fontSize: '1rem',
        fontWeight: '500',
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: '100ms ease-out',
        '&:hover': {
            backgroundColor: theme.secondary,
            color: theme.tertiary,
            border: `3px solid ${theme.tertiary}`,
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }
}));

function About() {
    const { theme, drawerOpen } = useContext(AboutContext);

    return (
        <Root className='landing' t={theme}>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>
                    </div>
                </div>
            </div>
        </Root>
    );
}

export default About;
