import Link from "next/link";

export function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Meu Site</div>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
                    <li><Link href="/gerenciarProdutos" className="text-white hover:text-gray-400">Gerenciar Produtos</Link></li>
                </ul>
            </div>
        </nav>
    );
}