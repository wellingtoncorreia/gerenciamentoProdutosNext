import { IProduto } from '@/app/types/Iproduto';
import Image from 'next/image';

interface ProdutoCardProps {
    produto: IProduto;
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
    return (
        <div className="bg-white rounded-lg w-75 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={produto.url} alt={produto.nome}  className="rounded-t-lg w-[300px] h-[300px]"/>
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200">
                    {produto.nome}
                </h2>
                <span className="text-gray-600 text-sm mt-2 block">{produto.descricao}</span>
                <h3 className="text-lg font-bold text-blue-600 mt-4">R$ {produto.preco.toFixed(2)}</h3>
                <button className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Comprar
                </button>
            </div>
        </div>
    );
}
