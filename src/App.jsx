import { useState, useEffect } from "react";
import Header from "./components/Header.jsx"
import BannerCard from "./components/BannerCard.jsx";
import BannerCard2 from "./components/BannerCard2.jsx";
import BannerCard3 from "./components/BannerCard3.jsx";


function App() {

  const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => setOffSetY(window.pageYOffset)

  useEffect(() =>{

    window.addEventListener('scroll', handleScroll );
  }, []);


  return (
    <div className="App">
    
        <Header />

        <BannerCard />

        <BannerCard2 />

        {/* <BannerCard3 /> */}


    </div>
  );
}

export default App;