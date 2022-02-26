export interface ITodo {
    id: string;
    desc: string;
    isComplete: boolean;
  }
  
  export interface State {
    todos: Todo[];
  }

 export interface IArticle {
    id: number
    title: string
    body: string
  }
  
 export  type ArticleState = {
    articles: IArticle[]
  }
  
 export type ArticleAction = {
    type: string
    article: IArticle
  }
  export type DispatchType = (args: ArticleAction) => ArticleAction