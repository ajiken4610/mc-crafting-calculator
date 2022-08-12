import { RecipeData, RecipeItem } from "./RecipeData";

export const useRecipe = () =>
  useCookie("recipe", { default: useDefaultRecipe });

export const saveRecipe = (
  id: string,
  data: {
    count: number;
    method: string;
    costs: RecipeItem[];
  }
) => (useRecipe().value = { ...useRecipe().value, ...{ [id]: data } });

export const removeRecipe = (id: string, data: RecipeData) => {
  delete data[id];
  return (useRecipe().value = { ...data });
};
