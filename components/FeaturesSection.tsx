import { Star, Clock, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Experiências Exclusivas",
    description: "Acesso VIP a locais e eventos que poucos têm o privilégio de desfrutar.",
  },
  {
    icon: Clock,
    title: "Planejamento Perfeito",
    description: "Cada minuto de sua viagem é meticulosamente organizado para máximo prazer e conforto.",
  },
  {
    icon: Users,
    title: "Grupos Intimistas",
    description: "Viaje com no máximo 8 pessoas, garantindo atenção personalizada e experiências únicas.",
  },
  {
    icon: Shield,
    title: "Segurança e Conforto",
    description: "Desfrute de acomodações 5 estrelas e transporte de luxo em todas as etapas de sua jornada.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-serif text-gold">Por que Escolher a TimberTrails</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-serif">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

