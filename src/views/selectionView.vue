<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center">
      <div class="row">

        <div class="col-lg-4 col-12 my-5 d-flex justify-content-center align-items-center">
          <div class="card" style="width: 18rem;">
            <img src="/images/love-story.svg" class="card-img-top" alt="...">
            <div class="card-body text-center">
              <p class="card-text">Secret Message </p>
              <button type="button" class="btn btn-infos" @click="selectedNumber('sm' + 1)" data-toggle="modal"
                data-target="#sm1">Open</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 my-5 d-flex justify-content-center align-items-center">
          <div class="card" style="width: 18rem;">
            <img src="/images/love-story.svg" class="card-img-top" alt="...">
            <div class="card-body text-center">
              <p class="card-text">Secret Message 2</p>
              <button type="button" class="btn btn-infos" @click="selectedNumber('sm' + 2)" data-toggle="modal"
                data-target="#sm2">Open</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 my-5 d-flex justify-content-center align-items-center">
          <div class="card" style="width: 18rem;">
            <img src="/images/love-story.svg" class="card-img-top" alt="...">
            <div class="card-body text-center">
              <p class="card-text">Secret Message 3</p>
              <button type="button" class="btn btn-infos" @click="selectedNumber('sm' + 3)" data-toggle="modal"
                data-target="#sm3">Open</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 my-5 d-flex justify-content-center align-items-center">
          <div class="card" style="width: 18rem;">
            <img src="/images/love-story.svg" class="card-img-top" alt="...">
            <div class="card-body text-center">
              <p class="card-text">Secret Message 4</p>
              <button type="button" class="btn btn-infos" @click="selectedNumber('sm' + 4)" data-toggle="modal"
                data-target="#sm4">Open</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 my-5 d-flex justify-content-center align-items-center">
          <div class="card" style="width: 18rem;">
            <img src="/images/love-story.svg" class="card-img-top" alt="...">
            <div class="card-body text-center">
              <p class="card-text">Secret Message 5</p>
              <button type="button" class="btn btn-infos" @click="selectedNumber('sm' + 5)" data-toggle="modal"
                data-target="#sm5">Open</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 my-5 d-flex justify-content-center align-items-center">
          <div class="card" style="width: 18rem;">
            <img src="/images/love-story.svg" class="card-img-top" alt="...">
            <div class="card-body text-center">
              <p class="card-text">Secret Message 6</p>
              <button type="button" class="btn btn-infos" @click="selectedNumber('sm' + 6)" data-toggle="modal"
                data-target="#sm6">Open</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" :id="number" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="height: 50vh;">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Secret Message <span class="text-uppercase">{{ number }}</span>
          </h5>
          <button type="button" class="btn btn-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3 text-center">
            <label for="exampleInputEmail1" class="form-label">Secret Passkey</label>
            <input type="text" class="form-control form-control-sm" id="passkey" v-model="passkey" >
            <div id="emailHelp" class="form-text">HINT: <span class="text-muted">{{ hintkey }}</span></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="selectedCase">View Secret Message</button>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>


<script>
export default {
  data() {
    return {
      number: 0,
      secretMessage: '',
      passkey: '',
      hintkey: '',
    };
  },
  methods: {
    selectedNumber: function (number) {
      this.number = number;
      if (this.number == 'sm1') {

        this.hintkey = 'The Day We First Became A Partner. Sample: 11292002';
        this.passkey 

      } else if (this.number == 'sm2') {

        this.hintkey = "The Day We First Became A Partner. Sample: 11292002";

      } else if (this.number == 'sm3') {

        this.hintkey = 'The Day We First Became A Partner. Sample: 11292002';

      } else if (this.number == 'sm4') {

        this.hintkey = 'The Day We First Became A Partner. Sample: 11292002';

      } else if (this.number == 'sm5') {

        this.hintkey = 'The Day We First Became A Partner. Sample: 11292002';

      } else if (this.number == 'sm6') {

        this.hintkey = 'The Day We First Became A Partner. Sample: 11292002';

      }
    },
    selectedCase: function () {

      if (this.passkey == '02232021') {
        if (this.number == 'sm1') {
          this.$router.push('/secretMessage/3a9bC7dE1fG2hI4jK6lM8nO0pQ2rT4vX6zY8aB0cD3eF5gH7iJ9kL1mN3');
          this.secretMessage = 'Secret Message One';
        } else if (this.number == 'sm2') {
          this.$router.push('/secretMessage/5bC7dE9fG1hI3jK5lM7nO9pQ1rT3vX5zY7aB9cD1eF3gH5iJ7kL9mN1o');
          this.secretMessage = 'Secret Message Two';
        } else if (this.number == 'sm3') {
          this.$router.push('/secretMessage/7cD9eF1gH3iJ5kL7mN9oP1qR3sU5wX7yZ9aB1dE3fG5hI7jK9lM1nO3');
          this.secretMessage = 'Secret Message Two';
        } else if (this.number == 'sm4') {
          this.$router.push('/secretMessage/9dE1fG3hI5jK7lM9nO1pQ3rT5vX7zY9aB1cD3eF5gH7iJ9kL1mN3oP');
          this.secretMessage = 'Secret Message Two';
        } else if (this.number == 'sm5') {
          this.$router.push('/secretMessage/1eF3gH5iJ7kL9mN1oP3qR5sU7wX9yZ1aB3cD5eF7gH9iJ1kL3mN5');
          this.secretMessage = 'Secret Message Two';
        } else if (this.number == 'sm6') {
          this.$router.push('/secretMessage/3fG5hI7jK9lM1nO3pQ5rT7vX9zY1aB3dE5fG7hI9jK1lM3nO5pQ7');
          this.secretMessage = 'Secret Message Two';
        }
      } else {
        alert(123);
      }

    }
  }
};
</script>