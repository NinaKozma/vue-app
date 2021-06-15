<template>
  <div class="about-us">
    <div class="about-us-info-wrapper">
      <div class="about-us-info">
        <h1 class="about-us-info-title">
          <i class="fa fa-cutlery" aria-hidden="true" ></i> We read with love! <i class="fa fa-heart"></i>
        </h1>
        <div class="about-us-info-button">
          <h3 class="about-us-info-button__text">
            <router-link class="button-text" to="/about"> Read more about us </router-link>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>

<style scoped>
@import "../global-variables.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.about-us {
  background-image: url("../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.75;
  filter: brightness(80%);
  height: 85vh;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    height: 83vh;
  }
  @media (min-width: 721px) and (max-width: 1280px) {
    height: 100vh;
  }

}
.about-us-info-wrapper {
  color: #ebcdac;
  border: 4px solid;
  border-radius: 5px;
  margin-top: 5%;
  @media (max-width: 720px) {
    margin-top: 22%;
  }
}
.about-us-info {
  padding: 40px 60px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    padding: 45px 40px;
  }
  @media (min-width: 721px) and (max-width: 1280px) {
    padding: 15px 30px;
  }
}
.about-us-info-title {
  color:#fff;
  @media (min-width: 721px) and (max-width: 1280px) {

  }
}
.button-text {
  margin-top: 50px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border: 3px solid #fff;
  border-radius: 3px;

}
.button-text:hover {
  border: 3px solid #ebcdac;
  cursor: pointer;
  transition: 0.3s;
  }
.button-text {
  padding: 10px 20px;
  color: #fff;
  @media (min-width: 721px) and (max-width: 1280px) {
    font: {
      size: 20px;

    }
  }
}
.button-text:hover .about-us,
.button-text:focus .about-us {
  transform: scale(1.9);
}

</style>
