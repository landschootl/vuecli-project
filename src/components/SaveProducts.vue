<template>
  <div>
    <h2 class="md-display-1">Création d'un nouveau produit :</h2>
    <md-field>
      <label>Nom</label>
      <md-input v-model="newProduct.name"></md-input>
    </md-field>
    <md-field>
      <label>Price</label>
      <md-input v-model="newProduct.price" type="number"></md-input>
    </md-field>
    <md-button class="md-primary" @click="createProduct()">Créer mon produit</md-button>
  </div>
</template>

<script>
export default {
  name: 'SaveProducts',
  data: function () {
    return {
      newProduct: {name: '', price: 0}
    }
  },
  methods: {
    createProduct() {
      this.axios.post(`https://node-baseapi.herokuapp.com/api/products`, this.newProduct)
              .then(result => {
                this.$emit('addProduct', result.data.result);
                this.initNewProduct();
              })
              .catch(error => console.log('error post new product', error));
    },
    initNewProduct() {
      this.newProduct = {name: '', price: 0};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
