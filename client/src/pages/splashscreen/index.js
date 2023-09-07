'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import anime, { timeline } from 'animejs'

const SplashScreen = ({ finishLoading }) => {

    const [isMounted, setIsMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader
            .add({
                targets: "#logo",
                opacity: [0, 1],
                duration: 425,
                easing: "easeInOutQuad",
                delay: (d, i) => 150 * i + 500
            })

            .add({
                targets: "#logo",
                delay: 0,
                scale: 1,
                duration: 500,
                easing: "easeInOutExpo",
            })
            .add({
                targets: "#logo",
                delay: 0,
                scale: 1.25,
                duration: 500,
                easing: "easeInOutExpo",
            })
            .add({
                targets: "#logo",
                delay: 0,
                scale: 1,
                duration: 500,
                easing: "easeInOutExpo",
            })
            .add({
                targets: "#logo",
                delay: 0,
                scale: 1.25,
                duration: 500,
                easing: "easeInOutExpo",
            })
            .add({
                targets: "#logo",
                opacity: [1, 0],
                duration: 425,
                easing: "easeInOutQuad",
                delay: (d, i) => 150 * i + 500
            })

    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className='flex justify-center items-center h-screen' isMounted={isMounted}>
            <Image id="logo" src="/resumora_logo.png" alt="" width={200} height={200} />
        </div>
    )
}

export default SplashScreen