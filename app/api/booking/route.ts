import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      style,
      placement,
      idea,
    } = body

    if (!name || !email || !style || !idea) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      )
    }

    const { error } = await resend.emails.send({
      from: 'Tattoo Booking <onboarding@resend.dev>',
      to: [process.env.BOOKING_EMAIL!],
      replyTo: email,
      subject: `New Tattoo Booking Request — ${name}`,
      html: `
        <h2>New Tattoo Booking Request</h2>

        <hr />

        <h3>Client Information</h3>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Preferred Style:</strong> ${escapeHtml(style)}</p>
        <p>
          <strong>Placement:</strong>
          ${escapeHtml(placement || 'Not specified')}
        </p>

        <h3>Idea</h3>

        <p>
          ${escapeHtml(idea).replace(/\n/g, '<br />')}
        </p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)

      return NextResponse.json(
        { error: 'Failed to send booking request.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking error:', error)

    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 },
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}