<script>
    import { Line } from "./";
    const authorInfoConfig = [
        {
            propertyName:"name",
            propertyValue: "Surendar Yama"
        },
        {
            propertyName:"description",
            propertyValue: "JavaScript Developer"
        },
        {
            propertyName:"youtube",
            propertyValue: "https://www.youtube.com/@surendaryama",
            link:true,
            linkUrl:"https://www.youtube.com/@surendaryama"
        },
        {
            propertyName:"github",
            propertyValue: "https://github.com/surendaryama",
            link:true,
            linkUrl:"https://github.com/surendaryama"
        },
        {
            propertyName:"email",
            propertyValue: "surendaryama@gmail.com"
        },
        {
            propertyName:"phoneNumber",
            propertyValue: "+91 8825549745"
        },
    ];
</script>

<template>
    {#each authorInfoConfig as config}
        <div class="flex space-x-6">
            <Line
                    propertyName={config.propertyName}
                    propertyValue={config.propertyValue}
                    link={config.link}
                    linkUrl={config.linkUrl}
            />
        </div>
    {/each}
</template>