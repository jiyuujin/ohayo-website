<!-- https://github.blog/2008-12-19-github-ribbons/ -->
<template>
  <a
    href="https://github.com/jiyuujin/ohayo-friday"
    target="_blank"
    rel="noopenner noreferrer"
  >
    <img
      width="149"
      height="149"
      alt="Fork me on GitHub"
      src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
      decoding="async"
      loading="lazy"
      data-recalc-dims="1"
    />
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
  font-family: arial, sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 0.7rem;
  line-height: 1.7rem;
  position: relative;
}

a:hover {
  opacity: 0.6;
}

a::before,
a::after {
  content: '';
  width: 100%;
  display: block;
  position: absolute;
  top: 1px;
  left: 0;
  height: 1px;
}

@media screen and (min-width: 600px) {
  a {
    position: fixed;
    display: block;
    top: 0;
    right: 0;
    width: 140px;
    overflow: hidden;
    height: 140px;
    z-index: 9999;
  }
}

@media (max-width: 600px) {
  a {
    display: none;
  }
}
</style>
