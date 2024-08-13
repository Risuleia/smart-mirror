import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { motion } from 'framer-motion'

import styles from '../styles.json'

import Recommendation from '../Structures/Recommendation/Recommendation.jsx'

import animation from '../../images/Animation.gif'

import '../Main.css'

function Main() {

    const [collapsedRecommendations, setCollapsedRecommendations] = useState(true)
    const [collapsedOverlay, setCollapsedOverlay] = useState(true)
    const [fits, setFits] = useState(styles[0])
    const [state, setState] = useState('initial')

    const webcamRef = useRef()

    // setInterval(() => {
    //     const elem = webcamRef.current
    //     const img = elem.getScreenshot()
    //     const imgBinary = base64ToBinary(img)
    //     console.log(imgBinary)
    // }, 10000);
    document.addEventListener('keypress', (e) => {
        if (e.key == 'J') setState('loading')
        if (e.key == 'K') setState('loaded')
        if (e.key == 'I') setState('initial')
    })

    const data = [
        {
            img: "https://static.zara.net/assets/public/2617/1776/fa5447c08ba0/e4bcf4f468e7/06224318251-a5/06224318251-a5.jpg?ts=1720014351899&w=563",
            name: "T-Shirt with Contrast Patch",
            price: "$30"
        },
        {
            img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2F27%2F50274e7da7101492e1333af645fd62062e64f2b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
            name: "Corduroy-collared denim jacket",
            price: "$60"
        },
        {
            img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F76%2F5a%2F765abde7b99a7459898cd8c67538794fc582451d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
            name: "Relaxed Fit Cargo trousers",
            price: "$75"
        },
        {
            img: "https://faworldentertainment.com/cdn/shop/files/2023_FA_Capsules_GraphicDetail_Apparel_BeatriceTwistedJean_DarkWash_Front.jpg?v=1715789872&width=1600",
            name: "Amelia Jean",
            price: "$23"
        },
        {
            img: "https://m.media-amazon.com/images/I/6155MXRlq2L._SY695_.jpg",
            name: "Yellow Chimes Chain",
            price: "$10"
        },
        {
            img: "https://m.media-amazon.com/images/I/71HhttWDHfL._SY625_.jpg",
            name: "Gold Plated Chunky Bracelet",
            price: "$15"
        },
    ]

    const colors = ["#75773C", "#D8C49F", "#352620"]

    return (
        <motion.div
            id='main'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="camera-input">
                {/* {
                    !loading
                        && */}
                    
                    <Webcam className='video-frame' width={1920} height={1080} audio={false} ref={webcamRef} />
                    {/* // <img src="https://i.pinimg.com/originals/55/09/ef/5509ef8a94d3cc499de74d7e1e77af49.jpg" /> */}
                {/* // } */}
            </div>
            {state == 'loading' && <div className="overlay-panel">
                <img src={animation} />
            </div>}
            {state == 'loaded' && <div className="overlay-details">
                <div className={`recommendations-bar${collapsedRecommendations ? '' : ' open'}`} onClick={() => setCollapsedRecommendations(prev => !prev)}>
                    {data.map((item, index) => (
                        <Recommendation key={index} data={item} />
                    ))}
                </div>
                <div className={`popup-overlay${collapsedOverlay ? ' collapsed' : ''}`}>
                    <div className="drag-handle" onClick={() => setCollapsedOverlay(prev => !prev)}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                    </div>
                    <div className="skin-tone">
                        <span className="skin-tone-label" select="false">Skin Tone:</span>
                        <div className="skin-tone-details">
                            <div className="skin-tone-color"></div>
                            <div className="skin-tone-description">For skin tone Dark Nude, try these complementary colors: earthy tones (olive green, terracotta), deep jewel tones (emerald green, sapphire blue), soft pastels (blush pink, lavender), and neutrals (beige, taupe). Opt for accessories in gold or bronze to enhance warmth.</div>
                        </div>
                    </div>
                    <div className="overlay-group">
                        <div className="inspos">
                            <span className="inspos-label" select="false">Inspos:</span>
                            <div className="inspos-types">
                                {styles.map((style, index) => (
                                    <div key={index} className="inspos-type" select="false" data-active={style.name == fits.name} onClick={() => setFits(styles[index])}>{style.name}</div>
                                ))}
                            </div>
                            <div className="inspos-items">
                                {fits.images.map((image, index) => (
                                    <div key={index} className="inspos-item">
                                        <img src={`/${image}.JPG`} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="palettes">
                            <span className="palettes-label" select="false">Palettes:</span>
                            <div className="swatches">
                                {colors.map((color, index) => (
                                    <div key={index} style={{ "--clr": color }} className="swatch" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </motion.div>
    )
}

export default Main