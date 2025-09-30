"use client"

import { Testimonial } from "@/components/ui/testimonial-card"
import { useLanguage } from "@/contexts/LanguageContext"

const testimonials = [
  {
    name: "Redam Mader",
    role: "Event Organizer",
    company: "Savate Boxe Française",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    testimonial: "The savate boxe Française world combat championship was held in this venue and everything was flawless its located just 5 mins walk away from the central train station."
  },
  {
    name: "Andrae Gaeth",
    role: "Fitness Enthusiast",
    company: "Local Member",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    testimonial: "Excellent gym, pool, spa and the best set of sauna, steam, ice rooms I've come across. Even has a relax room with a pretend roaring fire."
  },
  {
    name: "Black Mafia",
    role: "Gym Member",
    company: "Regular User",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    testimonial: "This gym and spa is absolutely fantastic! The gym features a wide range of modern equipment, making it easy to customize workouts for all fitness levels. The staff are friendly and knowledgeable, always willing to help with any questions or concerns. I highly recommend this place to anyone looking for a great workout experience."
  },
  {
    name: "Wayne Bock",
    role: "Event Attendee",
    company: "Concert Goer",
    rating: 4,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    testimonial: "Design is for basketball, hockey, or some other Arena sport. We went for a concert and the seat setup was average at best. Floor seats are on a flat surface, so if you're not in the first few rows, your view will be obstructed. The sound quality was good, but the overall experience was just okay."
  }
]

function Testimonials() {
  const { t } = useLanguage()
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
