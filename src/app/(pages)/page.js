import Link from "next/link";

export default function Home() {
  return (
    <div className="LandingPage">
      
      <Link href="/home">
        <h1>Landing Page - in a future release this will be cool, animated and funky</h1>
      </Link>

      <Link href="/home">
        <h5>Click to enter</h5>
      </Link> 
    </div>
  );
}
