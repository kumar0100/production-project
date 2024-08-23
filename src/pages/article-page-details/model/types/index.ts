import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { ArticleDetailsRecomandationsSchema } from "./ArticleDetailsRecomendationsSchema";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recomendations: ArticleDetailsRecomandationsSchema;
}
