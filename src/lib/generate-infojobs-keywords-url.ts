const DEFAULT_SEARCH_URL = "https://ms-autocomplete.spain.advgo.net/v1/search"
const MAX_RESULTS = "5"

export const generateInfoJobsKeywordsURL = ({ prefix }: { prefix: string }) => {
    const searchURL = new URL(DEFAULT_SEARCH_URL)

    if (!prefix) return

    searchURL.searchParams.set("prefix", prefix)
    searchURL.searchParams.set("max_results", MAX_RESULTS)

    return searchURL.toString()
}