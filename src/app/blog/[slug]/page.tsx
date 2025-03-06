import { notFound } from "next/navigation";

export const metadata = {
  title: "Blog Post | SiNKO",
  description: "Página de artigo individual no blog SiNKO",
};

// (Opcional) Gera páginas estáticas (SSG) para os slugs abaixo
export async function generateStaticParams() {
  // Em produção, você buscaria esses slugs de um CMS ou de arquivos locais
  const slugs = ["post-1", "post-2", "post-3"];
  return slugs.map((slug) => ({ slug }));
}

// (Opcional) Define revalidate para usar ISR (Incremental Static Regeneration)
export const revalidate = 60;

// Declare o tipo de params para clareza
type BlogSlugParams = { slug: string };

// Transforme o componente em `async` e aguarde `params`
export default async function BlogSlugPage({
  params,
}: {
  params: Promise<BlogSlugParams>;
}) {
  // Precisamos 'await' pois `params` é um Promise
  const { slug } = await params;

  // Lista de slugs válidos (exemplo)
  const validSlugs = ["post-1", "post-2", "post-3"];

  // Se o slug não estiver na lista, retorna 404
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-800">Blog Post: {slug}</h1>
      <p className="text-gray-600 mt-4">
        Conteúdo do post referente ao slug <strong>{slug}</strong>.
      </p>
    </section>
  );
}
