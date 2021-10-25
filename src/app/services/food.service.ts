import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Sea Food',
        price: 700,
        image: 'assets/images/foods/seafood-dishes.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 2,
        title: 'Hamburger',
        price: 200,
        image: 'assets/images/foods/hamburger.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 3,
        title: 'Mussels',
        price: 560,
        image: 'assets/images/foods/mussel.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 4,
        title: 'Pizza',
        price: 500,
        image: 'assets/images/foods/pizza.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 5,
        title: 'Breakfast',
        price: 400,
        image: 'assets/images/foods/scott-ish-breakfast.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 6,
        title: 'Tambi',
        price: 900,
        image: 'assets/images/foods/tambi.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
