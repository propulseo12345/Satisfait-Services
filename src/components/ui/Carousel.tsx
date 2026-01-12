'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  showArrows?: boolean
  showDots?: boolean
  loop?: boolean
  slideSize?: 'small' | 'medium' | 'large' | 'auto'
  align?: 'start' | 'center'
}

export function Carousel({
  children,
  className,
  showArrows = true,
  showDots = true,
  loop = false,
  align = 'start',
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className={cn('relative', className)}>
      {/* Viewport avec padding pour éviter les coupes */}
      <div
        ref={emblaRef}
        className="overflow-hidden -mx-4 px-4"
      >
        <div className="flex">
          {children}
        </div>
      </div>

      {/* Flèches de navigation - Desktop uniquement */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2',
              'hidden lg:flex items-center justify-center',
              'w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-200',
              'text-neutral-700 hover:text-primary-600 hover:border-primary-300',
              'transition-all duration-200 z-10',
              'disabled:opacity-0 disabled:pointer-events-none'
            )}
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 translate-x-2',
              'hidden lg:flex items-center justify-center',
              'w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-200',
              'text-neutral-700 hover:text-primary-600 hover:border-primary-300',
              'transition-all duration-200 z-10',
              'disabled:opacity-0 disabled:pointer-events-none'
            )}
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Indicateurs dots */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'bg-primary-500 w-5'
                  : 'bg-neutral-300 hover:bg-neutral-400 w-1.5'
              )}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Slide avec tailles prédéfinies optimisées mobile
interface CarouselSlideProps {
  children: React.ReactNode
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
}

export function CarouselSlide({
  children,
  className,
  size = 'md'
}: CarouselSlideProps) {
  const sizeClasses = {
    xs: 'w-[35%] sm:w-[28%] lg:w-[18%]',      // Zones, tags
    sm: 'w-[45%] sm:w-[35%] lg:w-[23%]',      // Stats compacts
    md: 'w-[75%] sm:w-[45%] lg:w-[31%]',      // Services, témoignages
    lg: 'w-[85%] sm:w-[48%] lg:w-[32%]',      // Cards détaillées
    full: 'w-[88%] sm:w-[75%] lg:w-[48%]',    // Cards très larges
  }

  return (
    <div
      className={cn(
        'flex-shrink-0 pr-4 last:pr-0',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}
