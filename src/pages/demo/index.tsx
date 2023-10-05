import { Button } from "@/components/ui/button" 
import Link from "next/link";

const Home = () => {
    return (
    <div className="flex flex-col gap-4 justify-center items-center bg-black w-screen h-screen">
        <Button asChild variant="secondary" className="rounded-xl px-20 text-4xl p-10">
            <Link href={"./"} >
                Launch ?
            </Link>
        </Button>
    </div>
    );
}
 
export default Home ;