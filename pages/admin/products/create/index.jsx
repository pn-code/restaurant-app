import CreateProductForm from "@/components/forms/CreateProductForm";
import Link from "next/link";

export default function AdminCreateProductPage() {
  return (
    <div className="p-12 w-full h-full bg-gray-50">
      <header className="flex gap-4 items-center mb-2">
        <h1 className="text-2xl font-bold">Create New Product</h1>
        <Link
          className="bg-blue-600/90 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded-md"
          href="/admin"
        >
          Dashboard
        </Link>
      </header>
      <CreateProductForm />
    </div>
  );
}
