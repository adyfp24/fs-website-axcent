type AppConfigType = {
    name: string,
    github?: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfigType = {
    name: "EduBot SNBT",
    author: {
        name: "EduBot Team",
        url: "https://edubot-snbt.com",
    }
}

export const baseUrl = import.meta.env.VITE_BASE_URL ?? ""
