import Link from "next/link";

export default function Home() {
  return (
    <div className="LandingPage">
      <Link href="/home">
        <h1>Landing Page</h1>
      </Link> 
    </div>
  );
}
