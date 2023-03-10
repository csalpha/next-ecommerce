1. Create Next App

   1. npx create-next-app nextjs-tailwind-ecommerce
   2. cd nextjs-tailwind-ecommerce
   3. npm run dev

2. Install Tailwind CSS

   1. npm install -D tailwindcss postcss autoprefixer
   2. npx tailwindcss init -p

3. Install React Icons

   1. npm install react-icons --save

4. Build Page Layout

   1. create components folder
   2. create Layout.jsx
   3. Add:
      1. header
      2. main section
      3. footer
      4. tailwind classes

5. List Products

   1. create data.js
   2. create images folder
   3. add images
   4. create ProductItem.jsx
   5. render products
   6. use apply modifier from tailwind

6. Product Details

   1. create product folder
   2. create [slug].jsx ( ProductScreen )
   3. create 3 columns
   4. show image in first column
   5. show product info in second column
   6. show add to cart action on third column
   7. add styles
   8. npm i -D @types/react

7. Handle Add To Cart

   1. create Store.jsx
   2. define react context
   3. define cart items state
   4. create add to cart action
   5. add reducer
   6. create store provider
   7. handle add to cart button

8. Create Shopping Cart Page

   1. create cart.jsx
   2. get cart items from use context
   3. list items in cart items
   4. remove Item handler
   5. redirect to cart screen after add to cart
   6. add select box for quantity
   7. handle select box change
   8. npm i @heroicons/react

9. Save Cart Items in cookies

   1. npm install js-cookie
   2. save and retreive cart items in cookies
