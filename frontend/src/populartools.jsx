import Card from "./Card.jsx";
import firma from "./assets/figma.png";
import sketch from "./assets/scetch.png";
import vs from "./assets/vscode.svg";
import noti from "./assets/notion.png";
import slash from "./assets/slacksa.svg";
import inv from "./assets/inv.png";



export default function popularTools() {
    return (
        <>
            <div className="popularTools">
                <h1>Most Popular Tools</h1>
                <p>Tools for the best Designers and Developers
                    most popularly used in the world</p>
            </div>
            <div className="popularToolsmain1">
                <div className="popularToolsmain">
                    <Card

                        title="Figma"
                        subtitle="Free"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={false}
                        image={firma}
                    />
                    <Card
                        title="Sketch"
                        subtitle="Trial & Paid"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={true}
                        image={sketch}
                    />
                    <Card
                        title="Visual Studio Code"
                        subtitle="Free"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={false}
                        image={vs}
                    />
                </div>
                <div className="popularToolsmain">
                    <Card
                        title="Notion"
                        subtitle="Free"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={false}
                        image={noti}
                    />
                    <Card
                        title="Slack"
                        subtitle="Trial & Paid"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={true}
                        image={slash}
                    />
                    <Card
                        title="Invision"
                        subtitle="Trial & Paid"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={true}
                        image={inv}
                    />
                </div>
            </div>
            <div className="popularToolsmain2">
                <div className="popularToolsmain2">
                    <Card

                        title="Figma"
                        subtitle="Free"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={false}
                        image={firma}
                    />
                    <Card
                        title="Sketch"
                        subtitle="Trial & Paid"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={true}
                        image={sketch}
                    />
                    <Card
                        title="Visual Studio Code"
                        subtitle="Free"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={false}
                        image={vs}
                    />
                    <Card
                        title="Notion"
                        subtitle="Free"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={false}
                        image={noti}
                    />
                    <Card
                        title="Slack"
                        subtitle="Trial & Paid"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={true}
                        image={slash}
                    />
                    <Card
                        title="Invision"
                        subtitle="Trial & Paid"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isPaid={true}
                        image={inv}
                    />
                </div>
            </div>
            <button className="more">Load more</button>

        </>


    )
}