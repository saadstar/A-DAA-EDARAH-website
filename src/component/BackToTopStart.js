import React, {useState} from 'react';


const BackToTopStart = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scrolling
    const handleScroll = () => {
        // Check the scroll position
        if (window.scrollY > 300) {
            // If scroll position is greater than 300px, show the button
            setIsVisible(true);
        } else {
            // Otherwise, hide the button
            setIsVisible(false);
        }
    };

    // Function to handle scrolling to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    };

    // Add scroll event listener when the component mounts
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run effect only once when component mounts


    return (
        <>
            {isVisible && (<div className="progress-wrap active-progress" onClick={scrollToTop}>
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>)}
        </>
    );
}


export default BackToTopStart;