import { Helmet } from "react-helmet-async";
import Properties from "./estates/Properties";
import Banner from "./header/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>LuxeHaven - Home</title>
            </Helmet>
           <Banner></Banner>
           <Properties></Properties>
            
        </div>
    );
};

export default Home;