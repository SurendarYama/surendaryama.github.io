<script>
    import {
        SemiColon,
        OpenFlowerBracket, CloseFlowerBracket,
        OpenParenthesis, CloseParenthesis, Equal,
        FullStop,
    } from "@/components/common";
    import { Lines } from "@/components/author";
</script>

<section class="author-info hidden">
    <div class="author-info-lines flex flex-col p-10 space-y-4">
        <div class="flex text-pink-500 space-x-4">
            <span class="text-white">const</span>
            <span>authorInfoConfig</span>
            <Equal/>
            <OpenFlowerBracket/>
        </div>
        <Lines/>
        <div class="flex">
            <CloseFlowerBracket/>
            <SemiColon/>
        </div>
        <div class="flex">
              <span class="flex mt-4">
                console<FullStop/><span class="text-violet-500">log</span>
                <OpenParenthesis/>
                <span class="text-pink-500">authorInfoConfig</span>
                <CloseParenthesis/>
                <SemiColon/>
              </span>
        </div>
    </div>
</section>
