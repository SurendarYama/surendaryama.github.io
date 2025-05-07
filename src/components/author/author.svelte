<script>
    import {
        SemiColon,
        OpenFlowerBracket, CloseFlowerBracket,
        OpenParenthesis, CloseParenthesis, Equal, Lines,
        FullStop,
    } from "./";
    import { WebStorm } from "../";
</script>

<section class="author-info">
    <h2 class="group/heading sm:text-center text-yellow-500 hover:underline ">Author Info Config Object <span class="text-red-500 group-hover/heading:text-pink-500">❤</span></h2>
    <div class="flex flex-col p-10 space-y-4">
        <div class="flex text-pink-500 space-x-4">
            <span class="text-white">const</span>
            <span>authorInfoConfig</span>
            <Equal/>
            <OpenFlowerBracket/>
        </div>
        <!-- End of line 1-->
        <Lines/>
        <!-- End of line 7 -->
        <div class="flex">
            <CloseFlowerBracket/>
            <SemiColon/>
        </div>
        <!-- End of line 8 -->
        <div class="flex">
              <span class="flex mt-4">
                console<FullStop/><span class="text-violet-500">log</span>
                <OpenParenthesis/>
                <span class="text-pink-500">authorInfoConfig</span>
                <CloseParenthesis/>
                <SemiColon/>
              </span>
        </div>
        <!-- End of line 9 -->
    </div>
    <div >
        <a class="flex items-center justify-center hover:text-fuchsia-400 hover:underline space-x-4" href="https://www.jetbrains.com/webstorm/"><span>Thanks to</span> <WebStorm /></a>
    </div>
</section>
<!--End of Author Info  -->