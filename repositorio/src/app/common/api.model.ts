export interface Fruits{
  Fruit: Fruits[]
  Nutrition:Nutritions[]
}

export interface Fruits {
  name: string
  id: number
  family: string
  order: string
  genus: string
  nutritions: Nutritions
}

export interface Nutritions {
  calories: number
  fat: number
  sugar: number
  carbohydrates: number
  protein: number
}
