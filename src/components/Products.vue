<template>
  <div>
    <h1 class="md-display-2">Gestion de mes produits :</h1>
    <save-products @addProduct="addNewProduct($event)" @updateProduct="updateProduct($event)" :isCreateMode="isCreateMode" :saveProduct="saveProduct"></save-products>
    <List-products :products="products" :productsIsLoad="productsIsLoad" @updateProduct="changeUpdateMode($event)"></List-products>
    <md-button class="md-raised" @click="changeCreateMode()">Créer un nouveau produit</md-button>
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
      productsIsLoad: false,
      isCreateMode: true,
      saveProduct: {name: '', price: 0}
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
      this.initNewProduct();
    },
    updateProduct(newProduct) {
      this.products = this.products.map(product => product.id === newProduct.id ? newProduct : product);
      this.changeCreateMode();
    },
    changeUpdateMode(product) {
      this.isCreateMode = false;
      this.saveProduct = Object.assign({}, product);
    },
    changeCreateMode() {
      this.isCreateMode = true;
      this.initNewProduct();
    },
    initNewProduct() {
      this.saveProduct = {name: '', price: 0};
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
