<template>
  <div>
    <h1 class="md-display-2">Gestion de mes produits :</h1>
    <save-products @addProduct="addNewProduct($event)"></save-products>
    <List-products :products="products" :productsIsLoad="productsIsLoad"></List-products>
  </div>
</template>

<script>
import ListProducts from "./ListProducts";
import SaveProducts from "./SaveProducts";

export default {
  name: 'Products',
  components: {
    ListProducts,
    SaveProducts
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
    },
    addNewProduct(product) {
      this.products.push(product);
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
