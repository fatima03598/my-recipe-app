
exports.seed = (knex, Promise) => {
  return knex('recipes').del()
    .then(() => {
      return knex('recipes').insert({
        title: 'Chocolate Cake',
        ingridients: '3/4 cups butter or margarine, softened; 3 eggs;  2 cups sugar;  2 cups flour; 3/4 cup unsweetened cocoa powder; 1 teaspoon baking soda; 3/4 teaspoon baking powder; 2 teaspoon vanilla; 1 1/2 cup milk',
        difficulty: 'easy',
        minutes: 50,
        serving: 12,
        imageURL: 'https://images.unsplash.com/photo-1582577829927-897c60e62d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        method: ' Pre-heat oven to 350 degrees. Grease and flour three 6" X 1 1/2" round cake pans. Mix together flour, cocoa powder, baking powder and baking soda. Set aside. In a large bowl, beat butter, eggs and vanilla. Gradually add sugar. Beat on medium to high speed for about 3-4 minutes until well mixed. Alternately combine in flour mixture and milk to batter while beating. Continue to beat until batter is smooth. Pour equal amounts of batter into greased and floured round cake pans. Bake 30 to 35 minutes. Check with a toothpick to se if it is done. Bake a few minutes more, if needed. Remove from oven and allow cakes to cool in pans for a few minutes. Place cakes on a wire rack, to them allow to completely cool.'
      });
    }).then(() => {
      return knex('recipes').insert({
        title: 'Banana Cake',
        ingridients: '125g butter; 150g caster sugar; 1 teaspoon vanilla extract; 1 egg, beaten; 2 very ripe bananas, mashed; 190g self raising flour;  60ml milk',
        difficulty: 'easy',
        minutes: 45,
        serving: 10,
        imageURL: 'https://images.unsplash.com/photo-1569762404472-026308ba6b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        method: ' Grease and line a 2lb loaf tin. Melt butter, sugar and vanilla in a saucepan over a medium heat. Remove from heat and add the mashed bananas, mix well. Add the egg, mix well.  Stir in the flour and the milk. Pour into the prepared tin, sprinkle with a tablespoon of demerara sugar to give a crunch topping if liked. Bake at 170 C / Fan 150 C / Gas 3 for 35 minutes, or until a skewer comes out clean. Leave to cool and enjoy!'
      })
    })
};
