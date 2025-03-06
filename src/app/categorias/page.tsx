import Link from "next/link";

export const metadata = {
  title: "Categorias | Blog SiNKO",
  description: "Explore todas as categorias do nosso blog.",
};

const categorias = [
  { nome: "Benefícios", slug: "beneficios" },
  { nome: "Conta Digital", slug: "conta-digital" },
  { nome: "Organização Financeira", slug: "organizacao-financeira" },
];
function CategoriasPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-800">Categorias</h1>
      <p className="text-gray-600 mt-2">
        Escolha uma categoria para explorar artigos relacionados.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {categorias.map((categoria) => (
          <Link key={categoria.slug} href={`/categorias/${categoria.slug}`}>
            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
              <h2 className="text-xl font-semibold">{categoria.nome}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoriasPage;
