import { DICTIONARY_TYPE } from "./const"

export type DictionaryId = (typeof DICTIONARY_TYPE)[keyof typeof DICTIONARY_TYPE]

export type CoolJobs = { image: string; title: string; brand: string; }
