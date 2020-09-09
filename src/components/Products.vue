<template>
  <div>
    <h1 class="md-display-2">Gestion de mes produits :</h1>
    <ListProducts :products="products" :productsIsLoad="productsIsLoad"></ListProducts>
  </div>
</template>

<script>
import ListProducts from "./ListProducts";

export default {
  name: 'Products',
  components: {
    ListProducts
  },
  data: function () {
    return {
      products: [],
      productsIsLoad: false
    }
  },
  methods: {
    getAllProduct() {
      this.axios.get(`https://node-baseapi.herokuapp.com/api/products`)
              .then(result => this.products = result.data.result)
              .catch(error => console.log('error recover all product', error))
              .finally(() => this.productsIsLoad = true);
    }
  },
  created() {
    this.getAllProduct();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
