export type QuestionPack = {
    [name: string]: {
        id: string,
        pairs: Array<{question: string, answer: string}>
    }
}