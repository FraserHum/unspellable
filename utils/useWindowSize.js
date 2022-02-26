import react from 'react'

export default function useWindowSize() {
    const isSSR = typeof window !== 'undefined'
    const [windowSize, setWindowSize] = react.useState({
        width: isSSR ? 1920 : window.innerWidth,
        height: isSSR ? 1080 : window.innerHeight,
    })

    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    react.useEffect(() => {
        window.addEventListener('resize', changeWindowSize)
        return () => {
            window.removeEventListener('resize', changeWindowSize)
        }
    }, [])
    return windowSize
}
