import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Home = () => {
    return (
        <>
            <div className="container">
                <Head>
                    <title>Alex Plays</title>
                    <meta property="og:title" content="Alex Plays" />
                </Head>
                <Header></Header>
                <div className="hero">
                    <div className="container01">
                        <div className="card mobile-first-div" style={{
                            height: "auto;"
                        }}>
                            <h1 className="text headingOne">Alex Plays</h1>
                            <h1 className="text01 headingOne">Music For You</h1>
                            <span className="text02 lead"></span>
                            <div className="container02">
                            <div style={{textAlign: 'center', display: 'flex', justifyContent:'center'}}>
                                <div className="container03">
                                    <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
                                </div>
                                <a href="#bio" className="link">
                                    <OutlineGrayButton
                                        button="read more"
                                        className="component02"
                                    ></OutlineGrayButton>
                                </a>
                                </div>
                            </div>

                            <div className="container04 flex-wrap-mobile"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "111%;"
                                }}>
                                <img
                                    alt="image"
                                    style={{
                                        height: 200,
                                        width: "auto"
                                    }}
                                    src="/playground_assets/newLogo.png"
                                    loading="eager"
                                    className="image"
                                />
                                <img
                                    alt="image"
                                    src="/playground_assets/pngwing.com-1200w.png"
                                    loading="eager"
                                    className="image"
                                    style={{
                                        height: 106,
                                        margin: "1px 0"
                                    }}
                                />
                                <br/>

                                <img
                                    alt="image"
                                    src="/playground_assets/pngfind.com-grammy-png-1944768-1200w.png"
                                    loading="eager"
                                    className="image"
                                    style={{
                                        height: 62,
                                        width: "auto"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    alt="image"
                    src="/playground_assets/bangaloreheadshot-1200h.jpeg"
                    className="image03"
                />

                <div className="container10 for-mobile">
                    <img
                        alt="image"
                        style={{ width: "100%" }}
                        src="/playground_assets/bangaloreheadshot-1200h-mobile.jpg  "
                        className="image04"
                    />
                </div>
                <section className="container07">

                    <div className="container08 mobile-padding">
                        <h1 className="text03 headingOne">The Journey</h1>
                        <span className="text04">
                            <span className="text05" style={{ textAlign: "justify !important", display: "flex" }}>
                                As a Producer, Artist and Songwriter,  Alex Plays has travelled the world with many global artists from all walks of life. Music is at the center of what can positively change the world.  Alex Plays Music that sets you free.  He plays music for you.
                            </span>
                        </span>
                    </div>
                    <div className="container09">
                        <div className="container10 hide-mobile ">
                            <img
                                alt="image"
                                style={{ width: "100%" }}
                                src="/playground_assets/PhotoShoot2.JPG"
                                className="image04"
                            />
                        </div>
                        <div id="bio" className="container11  ">
                            <img
                                alt="image"
                                src="/playground_assets/PhotoShoot1.JPG"
                                className="image05"
            />

                            <br/>
                            <br/>
                          

                            <div className="container12" style={{ marginLeft: -222}}>
                                <h3 className="headingTwo">
                                    <span className="text08">  Who is Alex Plays?</span>
                                </h3>
                                <p className="text08">
                                    <br></br>
                                    <span className="text10">
                                        Inspired by his love for different styles of music, Alex has
                                        created a unique global sound. He has worked with Warner
                                        Brothers, Universal Music Group, EMI and Cirque du Soleil.
                                        His collaborations have been nominated for Grammys.
                                    </span>


                                </p>
                            </div>
                            <section className="testimonials">
                                <img
                                    alt="image"
                                    src="/playground_assets/bottom.svg"
                                    className="bottom-wave-image"style={{ marginLeft: -55555}}>
                                />
                                <img
                                    alt="image"
                                    src="/playground_assets/waves-white.svg"
                                    className="image06"
                                />
                                <img
                                    alt="image"
                                    src="/playground_assets/top.svg"
                                    className="top-wave-image"
                                />
                                <div name="music" id="music" className="container13">
                                    <div className="container14">
                                        <div className="container15">
                                            <h2 className="text13 headingOne">Find Your Music</h2>
                                            <p className="text14 lead">
                                                <span className="text15"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="logos">
                                        <div className="container16">
                                            <div className="container17"></div>
                                            <div className="container18">
                                                <a
                                                    href="https://open.spotify.com/artist/3bbvoH6UFHGGbKyhleKNCG?si=awpvCgNxR8mS6MFE_lftdw"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="link1"
                                                >
                                                    <div className="container19">

                                                        <img
                                                            alt="image"
                                                            src="/playground_assets/287645_spotify_icon-1200w.png"
                                                            className="image07"
                                                        />

                                                    </div>
                                                </a>
                                                <a
                                                    href="https://music.apple.com/us/artist/alex-plays/290098984"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="link1"
                                                >
                                                    <div className="container20">
                                                        <img
                                                            alt="image"
                                                            src="/playground_assets/logo-apple.svg"
                                                            className="image08"
                                                        />
                                                    </div>
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/alexplaysmusic/"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="link1"
                                                >
                                                    <div className="container21">
                                                        <img
                                                            alt="image"
                                                            src="/playground_assets/pngegg-2-1200w.png"
                                                            className="image09"
                                                        />
                                                    </div>
                                                </a>
                                                <a
                                                    href="https://soundcloud.com/alexplays"
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="link1"
                                                >
                                                    <div className="container22">
                                                        
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="contaier">
  <br/>

                                <div style={{ width:"100%" }} name="media" id="media">
                                    <iframe width="666" height="444" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3525754&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&visual=false"></iframe>

                                </div>

                                <div className="divider"></div>
                                <div style={{ width: "455%" }}>
                                    <TwitterTimelineEmbed
                                        sourceType="profile"
                                        screenName="alexplaysmusic"
                                        options={{ height: 860, width: "333" }}
                                    />
                                </div>


                                <iframe className="iframe"></iframe>
                            </section>
                            {/* <Footer></Footer> */}
                      