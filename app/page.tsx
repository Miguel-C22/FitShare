import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
    <p className="mb-8 text-3xl font-bold">Welcome to FitShare!</p>
    <div className="flex gap-5 flex-wrap justify-center items-center">
      <button className="btn btn-outline btn-accent font-bold text-lg"><Link href={'/sign-in'}>Login</Link></button>
      <button className="btn btn-accent font-bold text-lg text-white"><Link href={'/sign-up'}>Sign Up</Link></button>
    </div>
  </div>
  );
}
