<template>
  <div>
    <h2 class="md-display-1">La liste de mes produits :</h2>
    <p>Nombre de produit : {{totalProducts}}</p>
    <p v-if="productsIsLoad">Prix total : {{totalPrice}} €</p>
    <md-progress-spinner v-if="!productsIsLoad" md-mode="indeterminate"></md-progress-spinner>
    <md-table v-else id="products-tab">
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Price</md-table-head>
        <md-table-head>CreatedAt</md-table-head>
        <md-table-head>UpdatedAt</md-table-head>
        <md-table-head>Action</md-table-head>
      </md-table-row>

      <md-table-row v-for="(product, index) in products" :key="index">
        <md-table-cell md-numeric>{{product.id}}</md-table-cell>
        <md-table-cell>{{product.name}}</md-table-cell>
        <md-table-cell>{{product.price}}</md-table-cell>
        <md-table-cell>{{product.createdAt}}</md-table-cell>
        <md-table-cell>{{product.updatedAt}}</md-table-cell>
        <md-table-cell>
          <md-button @click="updateProduct(product)">Modifier</md-button>
          <md-button class="md-accent" @click="deleteProduct(product, index)">Supprimer</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ListProducts',
  props: {
    products: Array,
    productsIsLoad: Boolean
  },
  methods: {
    updateProduct(product) {
      this.$emit('updateProduct', product);
    },
    deleteProduct(product, index) {
      this.axios.delete(`https://node-baseapi.herokuapp.com/api/products/${product.id}`)
              .then(() => {
                this.products.splice(index, 1);
              })
              .catch(error => console.log('error delete product', error));
    }
  },
  computed: {
    totalProducts() {
      return this.products.length;
    },
    totalPrice() {
      return this.products
              .map(product => product.price)
              .reduce((total, price) => total + price);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #products-tab {
    weight: 250px;
  }
</style>
