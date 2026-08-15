'use client'

import type React from 'react'
import { useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { TATTOO_STYLE_OPTIONS } from '@/lib/site-data'

const inputBase =
  'w-full border-0 border-b border-border bg-transparent px-0 py-3 font-sans text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors'

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const bookingData = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      style: formData.get('style')?.toString().trim(),
      placement: formData.get('placement')?.toString().trim(),
      idea: formData.get('idea')?.toString().trim(),
    }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          result.error || 'Failed to send booking request.',
        )
      }

      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('Booking submission error:', error)

      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-border bg-secondary px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="06"
          eyebrow="Reserve Your Session"
          title="Request a Booking"
        />

        {submitted ? (
          <div className="mt-16 border border-border p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="font-serif text-3xl font-light text-foreground">
              Request received.
            </p>

            <p className="mt-4 font-sans leading-relaxed text-muted-foreground">
              Thank you. Every inquiry is reviewed personally, with a response
              within 3&ndash;5 days to discuss your concept and availability.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-16 space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700"
          >
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputBase}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={inputBase}
                />
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <label
                  htmlFor="style"
                  className="mb-1 block font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Preferred style
                </label>

                <select
                  id="style"
                  name="style"
                  required
                  defaultValue=""
                  className={`${inputBase} appearance-none`}
                >
                  <option value="" disabled className="bg-background">
                    Select a style
                  </option>

                  {TATTOO_STYLE_OPTIONS.map((s) => (
                    <option
                      key={s}
                      value={s}
                      className="bg-background"
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="placement"
                  className="mb-1 block font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Placement
                </label>

                <input
                  id="placement"
                  name="placement"
                  type="text"
                  placeholder="e.g. forearm, spine"
                  className={inputBase}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="idea"
                className="mb-1 block font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                Tell me about your idea
              </label>

              <textarea
                id="idea"
                name="idea"
                rows={4}
                required
                placeholder="Concept, references, meaning, size..."
                className={`${inputBase} resize-none`}
              />
            </div>

            {error && (
              <div className="border border-red-500/30 bg-red-500/5 p-4">
                <p className="font-sans text-sm text-red-500">
                  {error}
                </p>
              </div>
            )}

            <div className="flex flex-col items-start gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm font-sans text-xs leading-relaxed text-muted-foreground">
                A non-refundable deposit is required to secure your date. It is
                applied to the final cost of your session.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center gap-3 whitespace-nowrap bg-foreground px-10 py-4 font-sans text-xs uppercase tracking-[0.25em] text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send request'}

                {!loading && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}