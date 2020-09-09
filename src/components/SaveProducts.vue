<template>
  <div>
    <h2 class="md-display-1">{{isCreateMode? `Création d'un nouveau produit :`: `Modification d'un produit :`}}</h2>
    <md-field>
      <label>Nom</label>
      <md-input v-model="saveProduct.name"></md-input>
    </md-field>
    <md-field>
      <label>Price</label>
      <md-input v-model="saveProduct.price" type="number"></md-input>
    </md-field>
    <md-button class="md-primary" @click="save()">{{isCreateMode? `Créer mon produit`: `Modifier mon produit`}}</md-button>
  </div>
</template>

<script>
export default {
  name: 'SaveProducts',
  props: {
    isCreateMode: Boolean,
    saveProduct: Object
  },
  data: function () {
    return {
    }
  },
  methods: {
    save() {
      if(this.isCreateMode) {
        this.createProduct();
      } else {
        this.updateProduct();
      }
    },
    createProduct() {
      this.axios.post(`https://node-baseapi.herokuapp.com/api/products`, this.saveProduct)
              .then(result => this.$emit('addProduct', result.data.result))
              .catch(error => console.log('error post new product', error));
    },
    updateProduct() {
      this.axios.put(`https://node-baseapi.herokuapp.com/api/products/${this.saveProduct.id}`, this.saveProduct)
              .then(result => this.$emit('updateProduct', result.data.result))
              .catch(error => console.log('error put product', error));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
