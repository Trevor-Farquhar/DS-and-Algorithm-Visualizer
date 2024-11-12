import Image from "next/image";
import Hello from "@/app/components/hello";


export default function Home() {
  console.log("test")
  return (
    <>
      <h1 className="text-3xl">"welcome to Next.js"</h1>
      <Hello />
    </>

  );
}
