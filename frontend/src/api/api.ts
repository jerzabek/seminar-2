const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'

type FetchMethod = 'GET' | 'POST' | 'DELETE'

interface RequestOptions {
  method: FetchMethod
  headers?: Record<string, string>
  body?: any
}

async function fetchRequest(url: string, options: RequestOptions): Promise<any> {
  const { method, headers, body } = options

  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }

  if (method === 'POST') {
    requestOptions.body = JSON.stringify(body)
  }

  const response = await fetch(`${BASE_URL}${url}`, requestOptions)

  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`)
  }

  if (response.status === 204) {
    return null
  }

  return await response.json()
}

export async function getData(url: string, headers?: Record<string, string>): Promise<any> {
  return await fetchRequest(url, { method: 'GET', headers })
}

export async function postData(url: string, data: any, headers?: Record<string, string>): Promise<any> {
  return await fetchRequest(url, { method: 'POST', headers, body: data })
}

export async function deleteData(url: string, headers?: Record<string, string>): Promise<any> {
  return await fetchRequest(url, { method: 'DELETE', headers })
}
