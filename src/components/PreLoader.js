import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import * as location from '../1055-world-locations.json'
import * as success from '../59945-success-confetti.json'
import Carts from '../Carts';

 
const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

   
  const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: success.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Preloader() {
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);;
                    setloading(true);

                    setTimeout(() => {
                        setcompleted(true);
                    }, 2000);
                });
        }, 2000);
    }, []);
    return (
        <>
            {
                !completed ? (
                    <div className="PreLoader">
                        {
                            !loading ? <Lottie options={defaultOptions1} height={300} width={300}/>
                            :<Lottie options={defaultOptions2} height={300} width={300}/>
                        }
                    </div>
                ):(
                    <Carts/>
                )
            }
        </>
    )
}

export default Preloader;