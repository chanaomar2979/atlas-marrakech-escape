'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME =
  'Bonjour ! Je suis Yasmine, votre conseillère voyage chez Atlas Marrakech Escape 🌟\n\nJe suis là pour vous aider à organiser votre voyage au Maroc. Dites-moi : quand souhaitez-vous partir et combien de jours avez-vous ?'

export default function AIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: WELCOME },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  // WCAG 2.1.2 Allow Escape to close dialog
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        openButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  async function send(): Promise<void> {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Désolée, une erreur est survenue. Contactez-nous sur WhatsApp ou par email.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e: React.KeyboardEvent): void {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        ref={openButtonRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#C2472A] text-white shadow-2xl flex items-center justify-center hover:bg-[#a33922] transition-all hover:scale-110 ${
          open ? 'hidden' : 'flex'
        }`}
        aria-label="Ouvrir le chat avec Yasmine, conseillère voyage"
        aria-expanded={open}
        aria-controls="ai-chat-dialog"
      >
        <MessageCircle size={24} aria-hidden="true" />
        <span
          className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4A853] rounded-full border-2 border-white animate-pulse"
          aria-hidden="true"
        />
      </button>

      {/* Chat window */}
      {open && (
        <div
          id="ai-chat-dialog"
          role="dialog"
          aria-modal="false"
          aria-label="Chat avec conseillère voyage"
          className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1B3A5C] to-[#2a5280] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-[#D4A853] flex items-center justify-center text-[#1A1208] font-bold font-serif text-lg"
                aria-hidden="true"
              >
                Y
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Yasmine</p>
                <p className="text-blue-200 text-xs">Conseillère voyage · En ligne</p>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white transition-colors p-2 -m-2"
              aria-label="Fermer le chat"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Messages — WCAG 4.1.3 Status Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 max-h-[360px] bg-[#FBF6EE]"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
            aria-label="Historique de la conversation"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}
                style={{ whiteSpace: 'pre-wrap' }}
              >
                <span className="sr-only">{m.role === 'user' ? 'Vous : ' : 'Yasmine : '}</span>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="chat-bubble-ai flex items-center gap-2" aria-live="polite">
                <Loader2 size={14} className="animate-spin" aria-hidden="true" />
                <span className="text-xs">Yasmine répond…</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          <div
            className="px-3 py-2 flex gap-1.5 overflow-x-auto bg-white border-t border-stone-100"
            role="group"
            aria-label="Suggestions de questions"
          >
            {['Prix des circuits', 'Meilleure période', 'Lune de miel'].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setInput(s)
                  inputRef.current?.focus()
                }}
                className="shrink-0 text-xs border border-[#C2472A] text-[#C2472A] rounded-full px-2.5 py-1 hover:bg-[#C2472A] hover:text-white transition-colors whitespace-nowrap"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            className="p-3 bg-white border-t border-stone-100 flex gap-2 items-center"
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
          >
            <label htmlFor="ai-chat-input" className="sr-only">
              Votre message à Yasmine (Appuyez sur Entrée pour envoyer)
            </label>
            <input
              id="ai-chat-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Votre question…"
              aria-describedby="ai-chat-hint"
              autoComplete="off"
              className="flex-1 bg-stone-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C2472A]/30"
            />
            <span id="ai-chat-hint" className="sr-only">
              Appuyez sur Entrée pour envoyer votre message.
            </span>
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-full bg-[#C2472A] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#a33922] transition-colors shrink-0"
              aria-label="Envoyer le message"
            >
              <Send size={15} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
