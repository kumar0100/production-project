export enum ArticleBlockType {
    CODE = "CODE",
    TEXT = "TEXT",
    IMAGE = "IMAGE",
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticlTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface ArticlCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticlImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlock = ArticlCodeBlock | ArticlImageBlock | ArticlTextBlock;

export enum ArticleType {
    ID = "ID",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
