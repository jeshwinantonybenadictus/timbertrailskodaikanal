"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// Simulated reviews data (in a real app, this would come from an API or database)
const reviews = [
  { id: 1, author: "João Silva", rating: 5, comment: "Experiência incrível! Recomendo a todos." },
  { id: 2, author: "Maria Santos", rating: 4, comment: "Ótimo tour, mas o tempo foi um pouco curto." },
]

export default function ReviewSection({ tourId }: { tourId: number }) {
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" })
  const [showReviewForm, setShowReviewForm] = useState(false)

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar a avaliação para o backend
    console.log("Nova avaliação:", newReview)
    // Resetar o formulário e esconder o formulário
    setNewReview({ rating: 0, comment: "" })
    setShowReviewForm(false)
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Avaliações</h3>
      {reviews.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg mb-4">Ainda não há avaliações para este tour.</p>
          <Button onClick={() => setShowReviewForm(true)}>Seja o primeiro a avaliar!</Button>
        </div>
      ) : (
        <>
          {reviews.map((review) => (
            <div key={review.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-2">
                <p className="font-bold mr-2">{review.author}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
          {!showReviewForm && (
            <Button onClick={() => setShowReviewForm(true)} className="mt-4">
              Adicionar Avaliação
            </Button>
          )}
        </>
      )}
      {showReviewForm && (
        <form onSubmit={handleSubmitReview} className="mt-8">
          <h4 className="text-xl font-bold mb-2">Adicionar Avaliação</h4>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 cursor-pointer ${i < newReview.rating ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
              />
            ))}
          </div>
          <Textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            placeholder="Escreva sua avaliação aqui..."
            className="mb-2"
          />
          <Button type="submit">Enviar Avaliação</Button>
        </form>
      )}
    </div>
  )
}

