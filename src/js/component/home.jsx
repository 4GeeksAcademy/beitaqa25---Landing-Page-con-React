import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Create your first component
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-5 ">
                <Jumbotron />
                <div className="row">
                    <div className="col-md-3">
                        <Card
                            title="Card title 1"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus non laboriosam!"
                            buttonText="Find Out More!"
                        />
                    </div>
                    <div className="col-md-3">
                        <Card
                            title="Card title 2"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus non laboriosam!"
                            buttonText="Find Out More!"
                        />
                    </div>
                    <div className="col-md-3">
                        <Card
                            title="Card title 3"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus non laboriosam!"
                            buttonText="Find Out More!"
                        />
                    </div>
                    <div className="col-md-3">
                        <Card
                            title="Card title 4"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus non laboriosam!"
                            buttonText="Find Out More!"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
