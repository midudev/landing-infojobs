const DEFAULT_SEARCH_URL = "https://www.infojobs.net/jobsearch/search-results/list.xhtml"
const SPAIN_COUNTRY_ID = "17"
const FIRST_PAGE = "1"
const SORT_BY_RELEVANCE = "RELEVANCE"

export const generateInfoJobsURL = ({
  keyword,
  level,
  provinceIds
}: {
  keyword: string,
  level: string,
  provinceIds: string
}) => {
  const searchURL = new URL(DEFAULT_SEARCH_URL)
  
  if (keyword) searchURL.searchParams.set("keyword", keyword)
  if (level) searchURL.searchParams.set("educationIds", level)
  
  if (provinceIds) searchURL.searchParams.set("provinceIds", provinceIds)
  else searchURL.searchParams.set("countryIds", SPAIN_COUNTRY_ID)

  searchURL.searchParams.set("page", FIRST_PAGE)
  searchURL.searchParams.set("sortBy", SORT_BY_RELEVANCE)
  
  return searchURL.toString()
}