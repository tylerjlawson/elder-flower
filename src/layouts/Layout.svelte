<script>
  export let templateHtml;
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<div class="container mx-auto">
  {@html templateHtml}
</div>
<footer>Built with ❤ and <a href="https://elderguide.com/tech/elderjs/">Elder.js</a></footer>
