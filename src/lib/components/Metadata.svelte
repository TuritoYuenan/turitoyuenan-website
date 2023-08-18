<script>
    export let title;
</script>

<!-- @component Current page's title, language, etc -->
<svelte:head>
    <title>{title ? title + ' | ' : ''}Turito Yuenan</title>
    <slot></slot>
</svelte:head>
