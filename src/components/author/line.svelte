<script>
    import { Colon, Comma, DoubleQuote } from "./";
    let { propertyName, propertyValue, link, linkUrl } = $props();
</script>

<div class="flex ml-6 space-x-2">
    <span class="text-orange-300">{propertyName}</span>
    <Colon/>
    {#if link}
        <a href={linkUrl} class="hover:underline hover:text-yellow-500">
            <span class="text-teal-300 hover:text-yellow-500"><DoubleQuote/>{propertyValue}<DoubleQuote/></span>
        </a>
    {:else }
        <span class="text-teal-300"><DoubleQuote/>{propertyValue}<DoubleQuote/></span>
    {/if}
    <span class="!-ml-0"><Comma/></span>
</div>
