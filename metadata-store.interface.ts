export interface LanguageCodedText {
    lang: string,
    value: string
}

export interface MDProfileStore {
    id: string,
    creator: string,
    maintainer: string,
    title: LanguageCodedText[],
    profiles: string[]
}
