import React, { useEffect, useState } from 'react'

function useVideo() {
    const [video, setVideo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const getVideo = async () => {
        setLoading(true)

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })
            setVideo(stream || null)
            setLoading(false)
        } catch (err) {
            setError(err)
            setVideo(null)
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getVideo()
    }, [])
    
    return { video, loading, error }
}

export default useVideo