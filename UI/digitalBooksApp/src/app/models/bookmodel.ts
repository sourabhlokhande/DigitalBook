export interface Books
{
    bookId?: number;
    title: string;
    category: string;
    price: number;
    publisher: string;
    publishedDate: Date;
    active: boolean;
    content: string;
    createdDate: Date;
    modifiedDate: Date;
    authorId: number;
}
