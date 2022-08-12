export class RecipeItem {
  count: number;
  id: string;
}

export class RecipeData {
  [id: string]: {
    count: number;
    method: string;
    costs: RecipeItem[];
  };
}
