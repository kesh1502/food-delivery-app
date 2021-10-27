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
        price: 300,
        image: 'assets/images/foods/burger.png',
        description:'Exist in flavours of chicken, seafood and tikkas with add-ons of corn, cilantro, and tomatoes: available sauce are firstly mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 2,
        title: 'Hamburger',
        price: 400,
        image: 'assets/images/foods/hamburger.png',
        description:'In addition to the freshet, Hamburger consist of chicken, sausages and chicken nuggets, made lavishly from the receipt of our european chef and blend of mauritian cuisine.',
      },
      {
        id: 3,
        title: 'Briani',
        price: 350,
        image: 'assets/images/foods/briani.png',
        description:'Classic Mauritian Briani available in different with different add-ons and flavours such as fish and chicken. As the legend says, One plate of Briani is never enough! ',
      },
      {
        id: 4,
        title: 'Sea Food',
        price: 800,
        image: 'assets/images/foods/seafood-dishes.png',
        description:'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 5,
        title: 'Pizza',
        price: 500,
        image: 'assets/images/foods/pizza.png',
        description:
          'Available in different flavours from the italian cuisine seafood, prawns, chicken, mayo, cilantro, and tomatoes: their first became mayonnise and also available in different sizes: small, medium  and large.',
      },
      {
        id: 6,
        title: 'Breakfast',
        price: 500,
        image: 'assets/images/foods/scott-ish-breakfast.png',
        description:
          'In addition to the freshet seafood, there are eggs, sausages, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 7,
        title: 'Wrap and Chips',
        price: 400,
        image: 'assets/images/foods/wrap.png',
        description:
          'In addition to the chicken mayo wrap, there are corn, spicy chips, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 8,
        title: 'Oyster with sauce',
        price: 800,
        image: 'assets/images/foods/mussel.png',
        description:'In addition to the oyster freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
