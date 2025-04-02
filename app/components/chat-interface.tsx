"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Send, X, User, Sparkles } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm your PedalFinder AI assistant. How can I help you find the perfect pedal for your sound today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      let response = ""

      // Simple pattern matching for demo purposes
      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("john mayer") || lowerInput.includes("blues tone")) {
        response =
          "For a John Mayer blues tone, I'd recommend:\n\n• Ibanez TS10 Tube Screamer (overdrive)\n• Keeley Katana Boost (clean boost)\n• Way Huge Aqua-Puss (analog delay)\n• Strymon BlueSky (reverb)\n\nThese pedals will help you achieve his signature clean but expressive blues sound, especially for songs like 'Gravity' and 'Slow Dancing in a Burning Room'."
      } else if (lowerInput.includes("distortion") || lowerInput.includes("heavy")) {
        response =
          "For a great distortion sound, check out these pedals:\n\n• Boss DS-1 (classic distortion)\n• ProCo RAT (versatile distortion)\n• MXR Super Badass (flexible EQ)\n• Electro-Harmonix Big Muff (fuzz distortion)\n\nThe Boss DS-1 is a great starting point if you're new to distortion pedals!"
      } else if (lowerInput.includes("ambient") || lowerInput.includes("reverb") || lowerInput.includes("delay")) {
        response =
          "For ambient soundscapes, you'll want these effects:\n\n• Strymon BigSky (premium reverb)\n• Electro-Harmonix Oceans 11 (versatile reverb)\n• Boss DD-8 (digital delay)\n• Walrus Audio Slö (atmospheric reverb)\n\nCombining reverb and delay will give you those beautiful ambient textures."
      } else {
        response =
          "Thanks for your question! I'd be happy to recommend some pedals based on your interests. Could you tell me more about what kind of sound you're looking for? For example, are you interested in a specific genre, artist tone, or effect type?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <div className="relative group">
        <button
          className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg hover:bg-zinc-800 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open chat assistant"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </button>
        {!isOpen && (
          <span className="absolute -top-10 right-0 w-auto p-2 bg-zinc-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ask about pedals
          </span>
        )}
      </div>

      {/* Chat modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-zinc-200 overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-zinc-200 bg-zinc-50">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-zinc-600" />
              <h3 className="font-medium">PedalFinder AI Assistant</h3>
            </div>
            <button
              className="text-zinc-500 hover:text-zinc-700"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-zinc-50">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
                  {message.role === "assistant" && (
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-zinc-600" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-lg shadow-sm max-w-[80%] ${
                      message.role === "user" ? "bg-zinc-800 text-white" : "bg-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>

                  {message.role === "user" && (
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-zinc-600" />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex space-x-1">
                      <div
                        className="h-2 w-2 rounded-full bg-zinc-300 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="h-2 w-2 rounded-full bg-zinc-300 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="h-2 w-2 rounded-full bg-zinc-300 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t border-zinc-200">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about pedals, artists, or tones..."
                className="w-full rounded-lg border border-zinc-300 py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none h-10 max-h-32 overflow-auto"
                rows={1}
                disabled={isLoading}
              />
              <button
                className="absolute right-2 bottom-2 rounded-full bg-zinc-800 p-1.5 text-white hover:bg-zinc-700 disabled:bg-zinc-400"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
              >
                <Send className="h-3 w-3" />
                <span className="sr-only">Send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

