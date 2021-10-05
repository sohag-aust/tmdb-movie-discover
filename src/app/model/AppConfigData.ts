export interface AppConfigData {
    readonly movie_api: MovieConfig;
}

export interface MovieConfig {
    readonly url: string;
    readonly api_key: string;
}
