<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <i class="material-icons">dynamic_form</i>
        </li>

        <router-link
            :to="'/list'"
            :class="$route.name === 'Forms list' ? 'active' : ''"
        >
          <li>Forms</li>
        </router-link>

        <router-link
            :to="'/profile-builder'"
            :class="$route.name === 'Profile builder' ? 'active' : ''"
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
  position: relative;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;

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
      }

      li {
        list-style: none;

        &>i {
          cursor: default;
          color: blue;
          font-size: 28px;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>