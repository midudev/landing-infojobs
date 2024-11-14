import type { DictionaryId } from "../types.ts"
import { dictionaries } from "./mocks.ts"

const INFOJOBS_API_ENDPOINT = "https://api.infojobs.net/api/1/"

const TOKEN = import.meta.env.API_INFOJOBS_TOKEN

export const query = async (path: string) => {
  const url = `${INFOJOBS_API_ENDPOINT}${path}`
  return fetch(url, {
    headers: {
      Authorization: `Basic ${TOKEN}`,
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
}

export const getDictionary = (dictionaryId: DictionaryId): Promise<Array<{ id: number, value: string, order: number, key: string }>> => {
  if (!TOKEN) return Promise.resolve(dictionaries[dictionaryId])
  return query(`/dictionary/${dictionaryId}`)
}
