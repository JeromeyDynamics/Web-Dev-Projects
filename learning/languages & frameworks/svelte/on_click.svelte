<script>
    let count = 0
    $: doubled = count * 2
</script>

<button on:click={() => {count += 1}}>Test</button>
<p>{doubled}</p>