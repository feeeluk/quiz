import Link from "next/link"

export default function NotFound() {

  return (
    <div className="Title">
      <h1>Quiz not found</h1>

      <Link href="/">Return to the homepage</Link>
    </div>
  )
}