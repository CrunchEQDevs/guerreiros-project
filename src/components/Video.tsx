'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Play, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface VideoData {
  id: number;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

interface VideoCardProps {
  video: VideoData;
  onVideoClick: (video: VideoData) => void;
}

const videosData: VideoData[] = [
  {
    id: 1,
    title: "Luís Caravana e Beatriz Leite na Seleção Nacional Jovem",
    category: "Futebol",
    date: "20 Jan 2025",
    thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=250&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    title: "Luís Caravana e Beatriz Leite na Seleção Nacional Jovem",
    category: "Futebol", 
    date: "20 Jan 2025",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 3,
    title: "Luís Caravana e Beatriz Leite na Seleção Nacional Jovem",
    category: "Futebol",
    date: "20 Jan 2025", 
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
    videoUrl: "https://youtube.com/watch?v=example3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
]

const VideoCard = ({ video, onVideoClick }: VideoCardProps) => {
  return (
    <Card className="overflow-hidden bg-transparent border-0 shadow-none">
      <div className="relative cursor-pointer" onClick={() => onVideoClick(video)}>
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <Button 
            size="lg" 
            className="rounded-full bg-white/95 hover:bg-white hover:scale-105 text-black p-6 w-24 h-24 transition-all duration-300 shadow-lg"
          >
            <Play style={{ width: '40px', height: '40px' }} className="fill-current ml-1" />
          </Button>
        </div>
      </div>

      <CardContent className="bg-transparent space-y-2 px-0">
        <div className="flex items-center gap-2">
          <span className="text-black font-bold text-xl">
            {video.category}
          </span>
        </div>

        <div className="flex items-center gap-3 font-semibold text-sm">
          <span className="text-white">SC Braga</span>
          <span className="text-black">•</span>
          <span className="text-white">{video.date}</span>
        </div>

        <div className="relative">
          <h3 className="text-xl font-bold text-white leading-tight">
            {video.title}
          </h3>
        </div>

        <div className="relative">
          <p className="text-white text-sm leading-relaxed">
            {video.description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function VideoSection() {
  const handleVideoClick = (video: VideoData) => {
    console.log('Vídeo clicado:', video)
  }

  return (
    <>
      <div className="max-w-7xl mx-auto pt-8">
        <h1 className="pb-4 mt-12 text-2xl font-bold uppercase tracking-wider">VÍDEOS</h1>
      </div>
      
      <section className="bg-[#BC0E1E] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosData.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onVideoClick={handleVideoClick}
              />
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <Link 
              href="/videos" 
              className="inline-flex items-center gap-2 bg-transparent text-black transition-all duration-300 font-medium px-8 py-3 rounded-lg"
            >
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}