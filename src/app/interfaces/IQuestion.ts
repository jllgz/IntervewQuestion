export interface IQuestion {
    id: number;
    categoryId: number;
    question: string;
    answer: string;
    image: string | null;
}