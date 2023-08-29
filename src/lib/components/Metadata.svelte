<script lang="ts">
    /** @type {string} Current page's title */
    export let title: string;
</script>

<!-- @component Set current page's metadata in the head tag -->
<svelte:head>
    <title>{title ? title + ' | ' : ''}Turito Yuenan</title>
    <slot></slot>
</svelte:head>
