<template>
  <div id="app" class="d-flex flex-column vh-100">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
}
</script>

<style>
/* header, footer {
  background-color: #3f7cad;
} */
</style>
