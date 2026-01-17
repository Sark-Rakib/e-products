import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-blue-600 text-white text-center rounded-lg">
      <h2 className="text-4xl font-extrabold mb-4">
        Ready to <span className="text-sky-400">Get Started?</span>
      </h2>
      <p className="mb-6 text-lg">
        Join now and explore premium digital products
      </p>
      <Link href="/register">
        <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg">
          Create Account
        </button>
      </Link>
    </section>
  );
}
