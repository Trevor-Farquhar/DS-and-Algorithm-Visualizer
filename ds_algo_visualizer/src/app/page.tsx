import Image from "next/image";
import Hello from "@/app/components/hello";
import Link from "next/link";


export default function Home() {
console.log("test")
    return (
    //TODO: change the href for all these so they go to the correct routes
        <div>
            <h1 className="text-3xl">Home Page</h1>
            
            <ul className="ds_algos_links">
                <li><Link href="/stacks">Stacks</Link></li>
                <li><Link href="/stacks">Queues</Link></li> 
                <li><Link href="/stacks">Singly Linked Lists</Link></li>
                <li><Link href="/stacks">Doubly Linked Lists</Link></li>
                <li><Link href="/stacks">Hash Maps</Link></li>
                <li><Link href="/stacks">Binary Search</Link></li>
                <li><Link href="/stacks">Breadth First Search</Link></li>
                <li><Link href="/stacks">Depth First Search</Link></li>
                <li><Link href="/stacks">Bubble Sort</Link></li>
                <li><Link href="/stacks">Insertion Sort</Link></li>
                <li><Link href="/stacks">Merge Sort</Link></li>
                <li><Link href="/stacks">Selection Sort</Link></li>
                <li><Link href="/stacks">Linear Search</Link></li>
                

            </ul>
        </div>
    );
}
