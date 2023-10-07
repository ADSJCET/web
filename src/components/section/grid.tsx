import { useScroll, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";

const collection = [
    {
        title: "Rajat Sandeep",
        content: "Lorem ipsum, dolor sit amet ",
        header: ""
    },
    {
        title: "Rajat Sandeep",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veritatis eaque aut rerum ducimus illum sunt ",
        header: ""
    },
    {
        title: "Rajat Sandeep",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veritatis eaque aut rerum ducimus illum sunt inventore! Praesentium cumque, nobis soluta tempora cupiditate placeat laudantium dolore deserunt nam molestias sit!",
        header: ""
    },
    {
        title: "Rajat Sandeep",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veritatis eaque aut rerum ducimus",
        header: ""
    },
    {
        title: "Rajat Sandeep",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veritatis eaque aut rerum ducimus",
        header: ""
    },
    {
        title: "Rajat Sandeep",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veritatis eaque aut rerum ducimus",
        header: ""
    },
    {
        title: "Rajat Sandeep",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veritatis eaque aut rerum ducimus",
        header: ""
    },
    {
        title: "Rajat Sandeep",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veritatis eaque aut rerum ducimus illum sunt inventore! Praesentium cumque, nobis soluta tempora cupiditate placeat laudantium dolore deserunt nam molestias sit!",
        header: ""
    },
]

const GridSection = () => {
    return ( 
        <div className="mx-auto h-screen md:masonry-3-col gap-10 [column-fill:_balance]" data-masonry='{"percentPosition": true }'>
            {
                collection.map((e,i)=> (
                    <Card key={i} className="break-inside-auto mb-6">
                        <CardHeader>{e.title}</CardHeader>
                        <CardContent>{e.content}</CardContent>
                    </Card>
                ))
            }
            
            
        </div>
     );
}
 
export default GridSection;

