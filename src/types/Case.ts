export interface Cases extends Array<Case>{}
export interface Case {
    title: string,
    client: string,
    image: string | null
}