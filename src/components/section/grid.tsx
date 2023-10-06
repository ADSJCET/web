import { useScroll, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";

const GridSection = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)
    
    return ( 
        <div className="mx-auto h-screen max-w-screen-lg masonry-3-col gap-10 [column-fill:_balance]" data-masonry='{"percentPosition": true }'>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum impedit sunt ipsam. Ratione, at, maiores temporibus explicabo aut recusandae eveniet dolore ut, in tempore accusamus ducimus quas ad non eaque.</CardContent>
            </Card>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum impedit sunt ipsam. Ratione, at, maiores temporibus explicabo aut recusandae eveniet dolore ut, in tempore accusamus ducimus quas ad non eaque.</CardContent>
            </Card>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum impedit sunt ipsam. Ratione, at, maiores temporibus explicabo aut recusandae eveniet dolore ut, in tempore accusamus ducimus quas ad non eaque.</CardContent>
            </Card>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet c.</CardContent>
            </Card>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet c.</CardContent>
            </Card>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet c.</CardContent>
            </Card>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum impedit sunt ipsam. Ratione, at, maiores temporibus explicabo aut recusandae eveniet dolore ut, in tempore accusamus ducimus quas ad non eaque.</CardContent>
            </Card>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum impedit sunt ipsam. Ratione, at, maiores temporibus explicabo aut recusandae eveniet dolore ut, in tempore accusamus ducimus quas ad non eaque.</CardContent>
            </Card>
            <Card className="break-inside-auto mb-6">
                <CardHeader>Rajat Sandeep</CardHeader>
                <CardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum impedit sunt ipsam. Ratione, at, maiores temporibus explicabo aut recusandae eveniet dolore ut, in tempore accusamus ducimus quas ad non eaque.</CardContent>
            </Card>
        </div>
     );
}
 
export default GridSection;