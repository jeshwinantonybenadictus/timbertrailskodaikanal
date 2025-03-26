"use client"
import type { Metadata } from "next"
import AccommodationClientPage from "./AccommodationClientPage"
import { useParams } from "next/navigation"



export default function AccommodationPage({ params }: { params: { id: string } }) {
  params=useParams()
  return <AccommodationClientPage params={params} />
}
