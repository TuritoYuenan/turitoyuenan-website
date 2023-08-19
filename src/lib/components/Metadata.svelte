<script>
    /**
     * @type {string} Current page's title
     */
    export let title;
</script>

<!-- @component Set current page's metadata in the head tag -->
<svelte:head>
    <title>{title ? title + ' | ' : ''}Turito Yuenan</title>
    <slot></slot>
</svelte:head>
