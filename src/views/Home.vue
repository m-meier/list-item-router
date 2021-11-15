<template>
  <h1>Welcome to Home</h1>

  <v-btn :to="{ name: 'About' }">Go to About by Button</v-btn>
  <br />
  <router-link :to="{ name: 'About' }">Go to About by Router Link</router-link>
  <v-list>
    <v-list-item :to="{ name: 'About' }" title="Go to About by List Item"></v-list-item>
  </v-list>
</template>
