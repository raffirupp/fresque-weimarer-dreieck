import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

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
