<template>
  <div class="about-page">
    <div id="background" class="slider-wrapper">
      <div class="slider-wrapper__title">
        <h1>
          My Kitchen
        </h1>
        <h4>
          "The place where diet stops"
        </h4>
      </div>
      <div class="about-text-wrapper">
        <p class="about-text-wrapper__text">
          An all around lovely and clean-cut website for all of recipes you desire.
          Find recipes collections based on categories, in addition to desserts, salads and more.
          You can also add your recipes ideas by making your account in
          <router-link style="text-decoration: underline; color: white" to="/register">register</router-link> form or
          by <router-link style="text-decoration: underline; color: white" to="/login">logging</router-link> in with your
          existing account. You can also find the ingredients for your next meal, cookware to make it,
          and awesome techniques to make the job easier.
        </p>
        <div
          id="button"
          class="about-text-wrapper__button"
        >
          <h3 class="about-us-info__button-text">
            <router-link class="button-text" to="/recipes">
              Check our Recipes
            </router-link>
          </h3>
        </div>
      </div> <!--about-text-wrapper-->
    </div> <!-- slider-wrapper -->
    <div class="chefs__section"> <!-- chefs section -->
      <!-- <div class="chefs__section-title">
        <h1>
          Idea Creators
        </h1>
      </div> -->
      <div class="chefs__section-card divider">
        <!-- <img class="chefs__section-card-image" src="../assets/jack_black.jpg" alt="Main Chef"> -->
        <h3 class="chefs__section-card-title">
          Jack Black
        </h3>
        <p class="chefs__section-card-text">
          "Jack lives in Oklahoma and absolutely loves food, cooking and photography.
          He is passionate about using whole foods and creating all kinds of delicious recipes."
        </p>
      </div>
      <div class="chefs__section-card divider tallest">
        <!-- <img class="chefs__section-card-image" src="../assets/john_doe.jpg" alt="Main Chef"> -->
        <h3 class="chefs__section-card-title">
          John Doe
        </h3>
        <p class="chefs__section-card-text">
          "Chef, photographer and writer behind the website and his cookbooks.
          You can also read his blog, purchase his books and follow his detailed instructions for creating all sorts of
          different recipes."
        </p>
      </div>
      <div class="chefs__section-card last-card">
        <!-- <img class="chefs__section-card-image" src="../assets/mary_ann.jpg" alt="Main Chef"> -->
        <h3 class="chefs__section-card-title">
          Mary Ann
        </h3>
        <p class="chefs__section-card-text">
          "Food writer and photographer. She is based in New York but has lived in places like China and Brasil and has a passion
           for the foods of different cultures."
        </p>
      </div>
    </div> <!-- chefs section -->
    <div class="contact__section"> <!-- contact section -->
        <h1 class="contact__section-title">Contact Us</h1>
        <label for="fname">First Name</label>
        <input
          v-model="clientMessage.name"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name..">

        <label for="lname">Last Name</label>
        <input
          v-model="clientMessage.lastName"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name..">

        <label for="email">E-mail</label>
        <input
          v-model.trim="clientMessage.email"
          type="email"
          id="email"
          name="email"
          placeholder="Your email address..">

        <label for="subject">Your Message</label>
        <textarea
          v-model="clientMessage.message"
          id="subject"
          name="subject"
          placeholder="Write something.."
          style="white-space: pre">
        </textarea>

        <div class="contact__section-button">
          <button
            :disabled="
              clientMessage.message === '' ||
              clientMessage.name === '' ||
              clientMessage.lastName === '' ||
              clientMessage.email === ''
            "
            type="submit"
            class="submit-button message-button"
            @click="onSubmit(clientMessage)">
              Send Message
          </button>
        </div>
    </div> <!-- contact section -->
  </div>  <!-- about-page -->
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>

