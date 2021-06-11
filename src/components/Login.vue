<template>
  <form @submit.prevent class="login__form">
    <!-- login__form-wrapper -->
    <template>
      <div class="login__form-title-wrapper">
        <h1 class="login__form-title">Login</h1>
      </div>
      <label style="font-weight: bolder" for="email">E-mail</label>
      <input
        v-model.trim="loginForm.email"
        type="email"
        id="email"
        name="email"
        placeholder="Your email address.."
      />

      <label style="font-weight: bolder" for="password">Password</label>
      <input
        v-model.trim="loginForm.password"
        type="password"
        id="password"
        name="password"
        placeholder="Password.."
      />

      <div class="login-button">
        <button
            :disabled="loginForm.email === '' || loginForm.password === ''"
            id="submit-button"
            class="submit-button"
            @click="login()">
          Submit
        </button>
        <!-- <input
          @click="login()" type="submit" value="Submit" /> -->
      </div>
    </template>
    <template>
      <div style="text-align: center" class="register__link-wrapper">
        <h2>
          <router-link class="link" to="/register">
            Still don't have an account?
          </router-link>
        </h2>
        <!-- <h3 id="information" style="display: none" class="info">Make sure to Register in order to <br> contribute to our Recipes List.</h3> -->
        <div class="register-button">
          <h1>
            <router-link class="button-link" to="/register">
              Go and Register
            </router-link>
          </h1>
        </div>
      </div>
    </template>
  </form>
  <!-- login__form-wrapper -->
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
      console.log('usao u login');
      // setTimeout(()=> {
      //   this.$router.push('/recipes');
      // }, 100);
    },
  },
};
</script>

<style scoped>
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Mate SC', 'cursive';
}
.login__form {
  background-image: url("../assets/login.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  opacity: 0.95;
  filter: brightness(80%);
  height: 100%;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 40px;
}
.login__form-title {
  margin: 0 auto;
  letter-spacing: 5px;
  font-size: 35px;
  color: white;
  text-shadow: 7px 7px 10px black;
  padding-bottom: 20px;
}
label[for="email"],
label[for="password"] {
  color:white;
  font-size: 22px;
  text-shadow: 7px 7px 10px black;
}

input[type="email"],
input[type="password"] {
  font-size: 20px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 25px 0;
  text-align: center;
  margin-bottom: 10px;
  width: 250px;
  height: 30px;
}
.login-button {
  margin: 20px;
  margin-bottom: 30px;
}
.register-button {
  margin-top: 20px;
}
.login-button input,
.register-button h1 {
  border: 2px solid black;
  text-decoration: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bolder;
}
.button-link {
  text-decoration: none;
  color: black;
}
.button-link:hover {
  color: white;
  transition: 0.5s;
}
.login-button input:hover,
.register-button h1:hover {
  cursor: pointer;
  transition: 0.5s;
  border: 2px solid white;
  color: white;
}
.register__link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 200px;
}
.link {
  color: white;
  text-decoration: none;
  font-size: 25px;
}
.link:hover {
  color: black;
  text-decoration: underline;
}
.submit-button {
  padding: 10px 10px;
  width: 150px;
  border: 2.5px solid black;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
}
.submit-button:hover {
  cursor: pointer;
  transition: 0.5s;
  border: 2px solid rgb(95, 0, 0);
  color: rgb(95, 0, 0);
}
.submit-button:disabled,
.submit-button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
</style>
