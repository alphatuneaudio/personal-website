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
                                    width: "100%;"
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
                            <br/>

                            <div className="container12" style={{ marginLeft: 1 }}>
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

<br/>


                                </p>
                            </div>
                            <section className="testimonials">
                                <img
                                    alt="image"
                                    src="/playground_assets/bottom.svg"
                                    className="bottom-wave-image"
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

                                <div style={{ width: "278" }} name="media" id="media" >
                                    <iframe width="333" height="444" scrolling="yes" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3525754&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&visual=false"></iframe>

                                </div>

                                <div className="divider"></div>
                                <div style={{ width: "100%" }}>
                                    <TwitterTimelineEmbed
                                        sourceType="profile"
                                        screenName="alexplaysmusic"
                                        options={{ height: 860, width: "378" }}
                                    />
                                </div>


                                <iframe className="iframe"></iframe>
                            </section>
                            {/* <Footer></Footer> */}
                        </div>
                    </div>
                </section>
                <style jsx>
                    {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .hero {
            width: 100%;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .container01 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .card {
            width: 504px;
            height: 396px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text01 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .text02 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .link {
            display: contents;
          }
          .component02 {
            text-decoration: none;
          }
          .container04 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .container05 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .container06 {
            flex: 0 0 auto;
            width: 449px;
            height: 72px;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .image {
            width: 131px;
            height: 53px;
            object-fit: cover;
          }
          .image01 {
            width: 93px;
            height: 65px;
            align-self: flex-start;
            object-fit: cover;
            padding-left: 33px;
          }
          .image02 {
            width: 176px;
            object-fit: cover;
            padding-left: 33px;
          }
          .image03 {
            top: 0px;
            left: auto;
            right: 0px;
            width: 50%;
            bottom: 0px;
            height: 80vh;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .container07 {
            width: 100%;
            height: 1329px;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container08 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .text03 {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text04 {
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text05 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .container10 {
            flex: 0 0 auto;
            width: 532px;
            height: 1118px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .image04 {
            width: 482px;
            height: 836px;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .text06 {
            width: 139px;
            height: 52px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 8rem;
            flex-direction: column;
          }
          .container11 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .image05 {
            width: 359px;
            height: 621px;
            align-self: center;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .container12 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .text08 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text09 {
            height: 284px;
          }
          .text10 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .image06 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .container13 {
            width: 100%;
            height: 464px;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .container14 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .container15 {
            height: 154px;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text13 {
            color: var(--dl-color-gray-white);
            padding-bottom: 33px;
          }
          .text14 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text15 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .logos {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container16 {
            flex: 0 0 auto;
            height: 157px;
            display: flex;
            min-width: 400px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
            margin-top: -70px;
          }
          .container17 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 185px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .container18 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .container19 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image07 {
            width: 100%;
            object-fit: cover;
          }
          .link1 {
            display: contents;
          }
          .container20 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .image08 {
            width: 100%;
          }
          .container21 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image09 {
            width: 100%;
          }
          .container22 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .image10 {
            width: 100%;
          }
          .contaier {
            width: 100%;
            height: 1573px;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container23 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container24 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .icon {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .text16 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text17 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .text18 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text19 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text21 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .container25 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container26 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .container26:hover {
            transform: scale(1.04);
          }
          .container27 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .container28 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .icon2 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text22 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text23 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .container29 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container31 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .container32 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coffee-shop.jpg');
            background-position: center;
          }
          .container32:hover {
            transform: scale(1.04);
          }
          .container33 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .container34 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .icon4 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text26 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text27 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .iframe {
            width: 320px;
            height: 200px;
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .container01 {
              max-width: 960px;
            }
            .card {
              width: 100%;
            }
            .image03 {
              width: 633px;
              height: 810px;
            }
            .container07 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container08 {
              max-width: 80%;
            }
            .text04 {
              text-align: center;
            }
            .text06 {
              width: 50%;
            }
            .container13 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
              display: flex;
              flex-direction: column;
            }
            .container14 {
              align-items: center;
            }
            .container15 {
              margin-right: 0px;
            }
            .container16 {
              min-width: 300px;
            }     
            .logos {
              display: block;
            }
            .contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container29 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
            .container31 {
              width: 45%;
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .card {
              align-items: center;
            }
            .text02 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .image {
              width: 40%;
            }
            .image01 {
              width: 40%;
            }
            .image02 {
              width: 40%;
            }
            .image03 {
              display: none;
            }
            .container07 {
              max-width: 720px;
            }
            .container09 {
              align-items: center;
              flex-direction: column;
            }
            .container10 {
              width: 80%;
            }
            .image04 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .text06 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .container11 {
              width: 80%;
            }
            .image05 {
              display: none;
            }
            .container13 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .container23 {
              width: 80%;
            }
            .text20 {
              text-align: center;
            }
            .container25 {
              flex-direction: column;
            }
            .container29 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container30 {
              margin-top: 0px;
              flex-direction: column;
            }
            .container31 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .card {
              padding: var(--dl-space-space-unit);
            }
            .container04 {
              align-items: center;
              flex-direction: column;
            }
            .container05 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .container13 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .text20 {
              text-align: center;
            }
            .mobile-padding {
              margin-top: 224px;
            }
            .hide-mobile {
              display: none;
            }
          }
        `}
                </style>
            </div>
        </>
    )
}

export default Home