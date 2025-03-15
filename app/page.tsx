"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { LinkedinIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("2025-05-31T00:00:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frame1-P7HWgKWoQMSj7ruVnNcGKzgvvnQRDR.png"})`,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-bg-pKw0Ov29qXrsHp5FRDqqpGiS0B3ZWI.png"
              alt="TIC Logo"
              width={40}
              height={40}
              className="w-10 h-10 transition-transform hover:scale-110"
            />
            <h1 className="text-2xl font-bold">TIC 2025</h1>
          </div>
          <div className="hidden space-x-4 md:flex">
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
              asChild
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4-8g8ur6dFzQSd_OFzV7QisTGxWhs2gqmnDpvu9RhLOw0aw/viewform?usp=sharing"
                target="_blank"
              >
                Become a Sponsor
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
              asChild
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSczitIvv3hHcJdaTg8N9XVFU_b01BpExUDgIrQnBW2cEh4Uuw/viewform?usp=sharing"
                target="_blank"
              >
                Become an Organizer
              </Link>
            </Button>
          </div>
          <Button className="bg-pink-500 hover:bg-pink-600" asChild>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfn3BFa-lif8_Hp_T-TItZcUZxwW4yl169N0gwBotF8GenpBw/viewform?usp=sharing"
              target="_blank"
            >
              Join Waitlist
            </Link>
          </Button>
        </header>

        {/* Hero Section */}
        <main className="py-20 text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-transparent-bg-pKw0Ov29qXrsHp5FRDqqpGiS0B3ZWI.png"
              alt="Toronto Innovation Challenge Logo"
              width={200}
              height={200}
              className="w-32 h-32 md:w-48 md:h-48 transition-transform hover:scale-105"
              priority
            />
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Toronto Innovation
            </span>
            <br />
            Challenge
          </h1>
          <p className="mb-12 text-xl text-gray-300">Join us for the biggest hackathon in Toronto this May 2025</p>

          {/* Countdown Timer */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: days, label: "Days" },
              { value: hours, label: "Hours" },
              { value: minutes, label: "Minutes" },
              { value: seconds, label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
                <div className="text-4xl font-bold text-pink-500">{item.value}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex flex-col gap-3 mb-12">
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
              asChild
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4-8g8ur6dFzQSd_OFzV7QisTGxWhs2gqmnDpvu9RhLOw0aw/viewform?usp=sharing"
                target="_blank"
              >
                Become a Sponsor
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
              asChild
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSczitIvv3hHcJdaTg8N9XVFU_b01BpExUDgIrQnBW2cEh4Uuw/viewform?usp=sharing"
                target="_blank"
              >
                Become an Organizer
              </Link>
            </Button>
          </div>

          {/* Waitlist Signup */}
          <div className="mx-auto max-w-md space-y-4">
            <h3 className="text-xl font-semibold">Join the Waitlist</h3>
            <Button size="lg" className="w-full bg-pink-500 hover:bg-pink-600 text-lg py-6" asChild>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfn3BFa-lif8_Hp_T-TItZcUZxwW4yl169N0gwBotF8GenpBw/viewform?usp=sharing"
                target="_blank"
              >
                Sign Up for the Waitlist
              </Link>
            </Button>
          </div>
        </main>

        {/* Features Grid */}
        <section className="grid gap-8 py-20 md:grid-cols-3">
          {[
            {
              title: "48 Hours",
              description: "Non-stop innovation and coding challenges",
            },
            {
              title: "$25K in Prizes",
              description: "Amazing rewards for groundbreaking solutions",
            },
            {
              title: "150+ Hackers",
              description: "Connect with talented developers from across Canada",
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-lg bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-semibold text-pink-500">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-gray-400">© 2025 Toronto Innovation Challenge. All rights reserved.</div>
            <div>
              <Link
                href="https://www.linkedin.com/company/toronto-innovation-challenge"
                target="_blank"
                className="text-gray-400 hover:text-pink-500"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

