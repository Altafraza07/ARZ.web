import { useEffect, useState } from "react";

const useReadingProgress = () => {

    const [complete, setComplete] = useState(0)

    useEffect(() => {
        const updateScrollComplete = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if(scrollHeight) {
                setComplete(
                    Number((currentProgress / scrollHeight).toFixed(2))* 100
                );
            }
        }
        

        window.addEventListener('scroll', updateScrollComplete);

        

        return () => {

            window.removeEventListener('scroll', updateScrollComplete);

        }
    }, []);

  return complete;
}

export default useReadingProgress