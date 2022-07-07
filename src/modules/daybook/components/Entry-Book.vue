<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry',  params: { id: 10 } })"
  >
  <!-- titulo -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold"> 7 </span>
        <span class="mx-1 fs-5"> Julio </span>
        <span class="mx-2 fw-light"> 2022, Jueves </span>
    </div>

    <div class="entry-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, accusantium eum eius est dolores aspernatur error reprehenderit rerum doloribus quam eligendi blanditiis quos iste. Saepe illum ipsum itaque neque mollitia!
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: #808080, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}

</style>