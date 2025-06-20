export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    publishDate: string;
    category: string;
    readTime: string;
    image: string;
    tags: string[];
    featured: boolean;
}
