export const api = {
    wikipedia: {
        base: 'https://en.wikipedia.org/api/rest_v1',
        get: {
            randomPage: async () =>
                fetcher<WikipediaPageSummary>(
                    `${api.wikipedia.base}/page/random/summary`
                ),
        },
    },
}

async function fetcher<T>(url: string) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return { data: data as T }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

type WikipediaPageSummary = {
    title: string
    extract: string
    thumbnail: {
        source: string
        width: number
        height: number
    }
    originalimage: {
        source: string
        width: number
        height: number
    }
    content_urls: {
        desktop: {
            page: string
        }
    }
}
