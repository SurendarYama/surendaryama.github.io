<script lang="ts">
    import type { AuthorInfoConfig } from "../../__types";
    import { Line } from "./";
    const authorInfoConfig: AuthorInfoConfig[] = [
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
            propertyName:"whatsapp",
            propertyValue: "https://whatsapp.com/channel/0029Vb66pouJuyA68kyivQ0F",
            link:true,
            linkUrl:"https://whatsapp.com/channel/0029Vb66pouJuyA68kyivQ0F"
        },
        {
            propertyName:"x",
            propertyValue: "https://x.com/surendaryama",
            link:true,
            linkUrl:"https://x.com/surendaryama"
        },
        {
            propertyName:"facebook",
            propertyValue: "https://facebook.com/surendaryama1",
            link:true,
            linkUrl:"https://facebook.com/surendaryama1"
        },
        {
            propertyName:"instagram",
            propertyValue: "https://www.instagram.com/surendaryama",
            link:true,
            linkUrl:"https://www.instagram.com/surendaryama"
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

{#each authorInfoConfig as config}
    <div class="flex space-x-6">
        <Line
            {...config}
        />
    </div>
{/each}