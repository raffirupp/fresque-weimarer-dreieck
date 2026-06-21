import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL ?? ''
const key = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

const supabase = url && key ? createClient(url, key) : null

/**
 * Submit contact form data to Supabase (fresque_submissions table).
 *
 * RLS policy on the table:
 *   - INSERT: allowed for anon role (anyone can submit the form)
 *   - SELECT: no policy → only the service_role key (you, in the dashboard) can read
 *
 * To view submissions: Supabase Dashboard → Table Editor → fresque_submissions
 */
export async function submitContactForm(payload) {
  if (!supabase) {
    console.warn('[formService] Supabase not configured – storing locally')
    localStorage.setItem('fresque_dev_submission', JSON.stringify({ ...payload, _at: new Date().toISOString() }))
    await new Promise(r => setTimeout(r, 600))
    return { ok: true }
  }

  const { error } = await supabase
    .from('fresque_submissions')
    .insert({
      language:      payload.language,
      einsatzzweck:  payload.einsatzzweck,
      land:          payload.land,
      zielgruppe:    payload.zielgruppe,
      partner:       payload.partner || null,
      email:         payload.email,
    })

  if (error) {
    console.error('[formService]', error.message)
    return { ok: false }
  }
  return { ok: true }
}
