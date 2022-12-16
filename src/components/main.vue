<template>
  <div class="container">
    <nav>
      <ul>
        <router-link
            :to="'/list'"
            :class="$route.name === 'Forms list' ? 'active' : ''"
        >
          <li>Forms</li>
        </router-link>

        <router-link
            :to="'/builder'"
            :class="$route.name === 'Forms builder' ? 'active' : ''"
        >
          <li>Form builder</li>
        </router-link>
      </ul>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "dynamic-form",
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;

  nav {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid black;
    position: absolute;
    top: 0;

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        text-decoration: none;
        color: black;
        cursor: pointer;
        padding: 5px;
        border: 1px solid transparent;

        &:hover, &.active {
          border: 1px solid black;
        }

        &:not(:first-child) {
          margin-left: 5px;
        }

        li {
          list-style: none;
        }
      }
    }
  }
}
</style>