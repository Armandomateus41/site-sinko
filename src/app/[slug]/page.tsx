import { notFound } from "next/navigation";

export const metadata = {
  title: "Categoria | Blog SiNKO",
  description: "Artigos filtrados por categoria.",
};

const categorias = {
  beneficios: "Benefícios",
  "conta-digital": "Conta Digital",
  "organizacao-financeira": "Organização Financeira",
};

 function CategoriaPage({ params }: { params: { slug: string } }) {
  const categoriaNome = categorias[params.slug as keyof typeof categorias];

  if (!categoriaNome) {
    return notFound();
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-800">{categoriaNome}</h1>
      <p className="text-gray-600 mt-2">
        Aqui estão os artigos da categoria <strong>{categoriaNome}</strong>.
      </p>
      {/* Você pode listar artigos aqui */}
    </section>
  );
}
export default CategoriaPage;
