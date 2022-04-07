import React, {
    useState, useEffect
} from 'react'


function getWindowDimensions() {
    const [width, setWidth] = useState(1900)
    const [height, setHeight] = useState(0)
    useEffect(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, [])
    // const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  export const transformWordCount = (count, lang) => {
    const ender = {
        first: 'день',
        second: 'дня',
        third: 'дней'
    }
    let total = count % 10

    switch (true) {
        case count >= 5 && count <= 20:
            return ender.third
        case total === 1:
            return ender.first
        case total > 1 && total < 5:
            return ender.second
        case total > 4: 
            return ender.third
        default:
            return ender.first
    }
}