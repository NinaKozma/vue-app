<template>
  <form @submit.prevent class="register__form">
    <h1 class="register__form-title">Register</h1>
    <label style="font-weight: bolder" for="fname">First Name</label>
    <input
      v-model="registerForm.name"
      type="text"
      id="fname"
      name="firstname"
      placeholder="Your name.."
    />
    <label style="font-weight: bolder" for="lname">Last Name</label>
    <input
      v-model="registerForm.lastName"
      type="text"
      id="lname"
      name="lastname"
      placeholder="Your last name.."
    />
    <label style="font-weight: bolder" for="email">E-mail</label>
    <input
      v-model="registerForm.email"
      type="email"
      id="email"
      name="email"
      placeholder="Your email address.."
    />
    <label style="font-weight: bolder" for="password">Password</label>
    <!-- <password
      class="password"
      :placeholder="placeholder"
      :secureLength="secureLength"
      v-model="registerForm.password">
    </password> -->
     <input
      v-model="registerForm.password"
      type="password"
      id="password"
      name="password"
      placeholder="Password.."
    />
    <label style="font-weight: bolder" for="password">Repeat Password</label>
    <input
      v-model="repeatedPassword"
      type="password"
      id="repeatpassword"
      name="repeatpassword"
      placeholder="Re-type your Password.."
    />
    <div class="terms-wrapper">
      <label style="font-weight: bolder" for="agree">
        <input v-model="isChecked" type="checkbox" id="checkboxAgree" />
        I agree to the terms of service.
      </label>
    </div>
    <div class="register-button-wrapper">
      <button
        :disabled="
          !isChecked ||
          registerForm.name === '' ||
          registerForm.lastName === '' ||
          registerForm.email === '' ||
          registerForm.password === '' ||
          registerForm.password.length < 6
        "
        id="submit-button"
        class="submit-button"
        @click="register"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
//import Password from 'vue-password-strength-meter'
export default {
  data() {
    return {
      registerForm: {
        name: "",
        lastName: "",
        email: "",
        password: "",
      },
      placeholder: 'Enter at least 6 character',
      secureLength: 6, // minimum password
      isChecked: false,
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        name: this.registerForm.name,
        lastName: this.registerForm.lastName,
        email: this.registerForm.email,
        password: this.registerForm.password
      })
      console.log('usao u register');
      // setTimeout(() => {
      //   this.$router.push('/');
      // }, 1000)
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Mate SC', 'cursive';
}
.register__form {
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
.register__form-title {
  margin: 0 auto;
  letter-spacing: 5px;
  font-size: 35px;
  color: white;
  text-shadow: 7px 7px 10px black;
  padding-bottom: 20px;
}
label {
  font-size: 22px;
  text-shadow: 7px 7px 10px black;
  color: white;
}
input[type="text"],
input[type="email"],
input[type="password"],
 .password {
  font-size: 20px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 25px 0;
  text-align: center;
  width: 250px;
  height: 30px;
}
.password{
  border: none;
  padding: 0;
  height: 30px;
}
.terms-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 0 10px;
  text-align: center;
}
label[for="agree"] {
  color: white;
  text-shadow: 3px 3px 3px black;
  text-decoration: none;
  vertical-align: middle;
  padding-top: 20px;
}
input[type="checkbox"] {
  color: white;
  width: 25px;
  height: 30px;
}
.register-button-wrapper {
  margin-top: 20px;
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
.submit-button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
</style>
