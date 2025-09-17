'use client'
import { FormEvent } from 'react'
import AppModalFormFields from './app_modal_form_fields'
import AppModalButton from '../../app_modal_ui/app_modal_button'
import AppModalError from '../../app_modal_ui/app_modal_error'
import { useAppModalForm } from '../../app_modal_hooks/app_modal_use_form'

interface Props {
  onClose: () => void
  whatsappNumber: string
  policyUrl: string
  originLabel?: string
}

export default function AppModalForm({
  onClose,
  whatsappNumber,
  policyUrl,
  originLabel,
}: Props) {
  const { fields, set, error, submitting, isValid, submit } = useAppModalForm({
    onClose,
    whatsappNumber,
    originLabel,
  })

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const payload = {
        name: fields.fullName?.trim(),
        phone: (fields.phone || '').replace(/\D/g, ''), // normaliza
        email: fields.email?.trim() || '',
        enterpriseId: 2,
      }

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const text = await res.text()
      let data: any = null
      try { data = JSON.parse(text) } catch {}

      if (!res.ok) {
        console.error('API error:', res.status, data ?? text)
        throw new Error(`Falha ao enviar lead`)
      }

      await submit() // seu fluxo atual (abrir WhatsApp etc.)
    } catch (err) {
      console.error('Form submission error:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AppModalFormFields.FullName value={fields.fullName} onChange={set.setFullName} />
      <AppModalFormFields.Email value={fields.email} onChange={set.setEmail} />
      <AppModalFormFields.Phone value={fields.phone} onChange={set.setPhone} />
      <AppModalFormFields.Privacy
        checked={fields.accepted}
        onChange={set.setAccepted}
        policyUrl={policyUrl}
      />
      {error && <AppModalError>{error}</AppModalError>}
      <AppModalButton disabled={submitting || !isValid}>
        {submitting ? 'Abrindo WhatsApp...' : 'Enviar para o WhatsApp'}
      </AppModalButton>
    </form>
  )
}
