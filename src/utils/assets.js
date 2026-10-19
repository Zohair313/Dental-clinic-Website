/**
 * Asset URL Resolver
 * --------------------------------------------------------------------------
 * Seamlessly resolves asset paths across localhost (/) and GitHub Pages (/Dental-clinic-Website/).
 * Prevents 404 errors caused by absolute root leading slashes on subpath-hosted domains.
 */
export function getAssetUrl(path) {
  if (!path) return ''
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  return `${normalizedBase}${cleanPath}`
}
