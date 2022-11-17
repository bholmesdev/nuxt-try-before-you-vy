<template>
  <div class="bg-gray-900 h-screen text-white p-5">
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/space">Space</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</div>
</template>