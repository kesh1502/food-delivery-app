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
        title: 'Burger',
        price: 200,
        image: 'assets/images/foods/burger.png',
        description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 2,
        title: 'Briani',
        price: 360,
        image: 'assets/images/foods/briani.png',
        description:'Classic Mauritian Briani available in different with different add-ons and flavours such as fish and chicken. As the legend says, One plate of Briani is never enough! ',
      },
      {
        id: 3,
        title: 'Sea Food',
        price: 700,
        image: 'assets/images/foods/seafood-dishes.png',
        description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 4,
        title: 'Pizza',
        price: 500,
        image: 'assets/images/foods/pizza.png',
        description:
          'In addition to the freshet seafood, there are prawns, chicken, mayo, corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
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
        title: 'Wrap and Chips',
        price: 400,
        image: 'assets/images/foods/wrap.png',
        description:
          'In addition to the chicken mayo wrap, there are corn, spicy chips, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
