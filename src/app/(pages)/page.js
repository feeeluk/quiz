import Link from "next/link";

export default function Home() {
  return (
    <div className="LandingPage">
      <Link href="/home">
        <h1>Test - Landing Page</h1>
      </Link>

      <Link href="/home">
        <h5>Click to enter</h5>
      </Link> 
    </div>
  );
}
