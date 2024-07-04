<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4">User List</h1>
    <input
      v-model="search"
      class="border p-2 rounded w-full mb-4"
      placeholder="Search by email"
    />
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Password
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(user, index) in filteredUsers" :key="index">
          <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ user.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const users = ref([]);

const fetchUsers = async () => {
  const res = await $fetch("/api/auth", {
    method: "GET",
  });

  users.value = res.users;

  //console.log(res.users);
};

const search = ref("");

const filteredUsers = computed(() => {
  return users.value.filter((user) =>
    user.email.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(async () => {
  await fetchUsers();
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

thead {
  background-color: #f9fafb;
}
</style>
