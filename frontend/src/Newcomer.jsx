import micrososft from "./assets/microsoft.svg"
import slack from "./assets/slack.svg"
import google from "./assets/google.svg"
import wordpress from "./assets/wordpress.svg"
import Card from "./Card.jsx";
import noti from "./assets/notion.png";
import slash from "./assets/slacksa.svg";
import inv from "./assets/inv.png";
import zeplin from "./assets/zeplin.png";
import php from "./assets/phpstorm.png";
import toolbox from "./assets/toolbox.png";
import procreate from "./assets/procreate.png";



export default function NewComer() {
    return (
        <>
            <div className="brands">
                <p>Trusted more than 150+ brand</p>
                <div className="brand">
                    <img src={micrososft} alt=""/>
                    <img src={slack} alt=""/>
                    <img src={google} alt=""/>
                    <img src={wordpress} alt=""/>
                </div>
            </div>
            <div className="newcomers">
                <div className="newcomertext">
                    <h1>Newcomer Tools</h1>
                    <p>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
                    <button>Explore more</button>
                </div>
                <div className="newcomerfull">
                   <div className="newcomermini">
                       <Card
                           title="Zeplin"
                           subtitle="Free & Paid"
                           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                           isPaid={false}
                           image={zeplin}
                       />
                       <Card
                           title="PHPStorm"
                           subtitle="Free"
                           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                           isPaid={true}
                           image={php}
                       />
                   </div>
                    <div className="newcomermini">
                        <Card
                            title="Toolbox"
                            subtitle="Free"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            isPaid={true}
                            image={toolbox}
                        />
                        <Card
                            title="Procreate"
                            subtitle="Paid"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            isPaid={true}
                            image={procreate}
                        />
                    </div>


                </div>


            </div>
        </>
    )
}