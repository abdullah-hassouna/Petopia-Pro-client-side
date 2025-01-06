import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div>
    <h1 className="text-3xl font-bold">Welcom Back, Mohammad!</h1>

   <div className="flex gap-4 mt-4">
   {/* <Button >primary</Button>
   <Button variant="destructive">primary</Button> */}

    <Button variant={"product"} size="lg">product</Button>
    <Button variant={"adoption"}>adoption</Button>
    <Button variant={"discuss"}>discuss</Button>
    <Button variant={"sale"}>sale</Button>
    <Button variant={"help"}>help</Button>
    <Button variant={"ghost"}>ghost</Button>
   </div>


    </div>
  );
}


export default Home 