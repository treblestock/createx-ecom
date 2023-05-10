function download(fileName = 'untitled', blob: Blob) {
  const urledData = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = fileName
  link.href = urledData

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  window.URL.revokeObjectURL(urledData)
}
export default function downloadAsJson(fileName: string, json: string) {
  const blob = new Blob([json], {type: 'application/json'})
  
  download(fileName, blob)
}

export function fetchDownload(url: string, options: RequestInit | undefined, filename = 'untitled') {
  fetch(url, options)
    .then(resp => resp.blob() )
    .then(blob => download(filename, blob) )
}