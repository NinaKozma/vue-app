<template>
  <div class="products-wrapper">
    <div class="all-products">
      <div v-for="product in romanceCollection" :key="product.id" class="single-product-card">
        <h1 class="product-title">{{product.title}} by</h1>
        <h1 class="product-title">{{product.writer}}</h1>
        <br>
        <img class="product-image" :src="product.src"/>
        <h3 class="product-price">Price: {{product.price}} RSD</h3>
        <h5 @click="showInfo(product)" class="product-show-desc">Click here for description!</h5>
        <div class="action-buttons">
          <svg @click="onDeleteIcon(product)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi-bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </div>
      </div>
    </div>
    <Modal v-model="showInfoModal" modalClass="modal-wrapper-info">
      <h4><i>{{itemForInfo.title}} </i>, {{itemForInfo.writer}}</h4>&nbsp;
      <hr>
      <br>
      <p><i>{{itemForInfo.desc}}</i></p>
      <hr>
      <br>
      <h4>Price: {{itemForInfo.price}} RSD</h4>
    </Modal>
    <Modal v-model="showDeleteModal" modalClass="modal-wrapper-delete">
      <h5>Removing-<i>{{itemForDelete.title}}?</i></h5>
      <div class="delete-action-buttons">
        <button class="btn btn-primary" @click="confirmDelete(itemForDelete.id)">Confirm</button>
        <button class="btn btn-danger" @click="closeDeleteModal">Cancel</button>
      </div>
    </Modal>
  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      itemForDelete: {},
      itemForInfo: {},
      showDeleteModal: false,
      showInfoModal: false
    }
  },
  computed: {
    ...mapState(["romanceCollection"]),
    ...mapActions(["getRomanceCollection"])
  },
  // LIFE-CYCLE hooks
  mounted() {
    this.$store.dispatch("getRomanceCollection");
  },
  methods: {
    onDeleteIcon(product) {
      this.itemForDelete = product;
      this.showDeleteModal = true;
    },
    confirmDelete(id) {
      this.$store.dispatch("deleteRomanceProduct", id);
      this.closeDeleteModal();
      this.$store.dispatch("getRomanceCollection");
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    showInfo(product) {
      this.itemForInfo = product;
      this.showInfoModal = true;
    }
  }

}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.products-wrapper {
  height: 100%;
  width: 100%;
  padding-top: 140px;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/background.jpg");
  background-repeat: no-repeat;
  font-family: 'Mate SC', 'cursive';
}
.single-product-card {
  border: 4px solid;
  border-radius: 25px;
  height: 590px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px,
    rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px,
    rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px;
  margin-bottom: 30px;
  margin-left: 20px;
}
.product-title, .product-price {
  text-shadow: 5px 5px 10px black;
  margin-top: 5%;
  font-size: 30px;
  color: white;
}
.product-image {
  padding: 0px 0px;
  width: 220px;
  height: 300px;
  border: 3px solid;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 5px;
}
.product-show-desc {
  margin-top: 15px;
  margin-bottom: 20px;
  color: white;
  text-shadow: 5px 5px 10px black;
}
.product-show-desc:hover {
  color: black;
  text-shadow: 5px 5px 10px white;

}
.bi-bi-trash {
  color: white;
}
.bi-bi-trash:hover {
  color: rgb(235, 57, 57);
  transition: 0.3s;
  cursor: pointer;
}
.modal-wrapper-info {
  justify-content: center;
}
.modal-wrapper-info:hover {
  cursor: pointer;
}
.modal-wrapper-delete {
  font-size: 15px;
}
.delete-action-buttons {
  margin-top: 20px;
  font-size: 22px;
}
.btn-primary, .btn-danger {
  margin-right: 20px;
  height: 30px;
  width: 70px;
  justify-content: space-evenly;
  align-items: center;
}
</style>
