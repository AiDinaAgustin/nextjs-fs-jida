import Link from "next/link";

export default function ProductPage() {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Product Page</h1>
            <div className="flex items-center justify-center gap-4">
                <Link href="/dashboard/product/1" className="text-blue-500 hover:underline">
                    Product 1
                </Link>
                <Link href="/dashboard/product/2" className="text-blue-500 hover:underline">
                    Product 2
                </Link>
                <Link
                    href="/dashboard"
                    className="text-blue-500 hover:underline"
                >
                    Back to Dashboard Page
                </Link>
            </div>
        </div>
    );
}