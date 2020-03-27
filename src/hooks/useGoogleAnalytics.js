import { useEffect } from "react"
import ReactGA from "react-ga"

const useGoogleAnalytics = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return

    ReactGA.initialize("UA-161684050-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  const trackEvent = (eventArgs) => {
    ReactGA.event(eventArgs)
  }

  const createGAEventHandler = (name, args = {}) => () => {
    trackEvent({ category: "Navigation", action: name, ...args })
  }

  return { trackEvent, createGAEventHandler }
}

export default useGoogleAnalytics
