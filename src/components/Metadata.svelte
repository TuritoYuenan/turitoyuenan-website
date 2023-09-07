<script lang="ts">
    /** @type {string} Current page's title */
    export let title: string;
    export let desc: string = "Turito Yuenan's website";
</script>

<!-- @component Set current page's metadata in the head tag -->
<svelte:head>
    <title>{title ? title + ' | ' : ''}Turito Yuenan</title>
    <meta name="description" content={desc}>
    <slot></slot>
</svelte:head>
